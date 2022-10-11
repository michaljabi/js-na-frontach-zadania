import axios from 'axios'
import { Subject } from 'rxjs'
import { v4 } from 'uuid'

export const STATUS = {
    loading: 'LOADING',
    success: 'SUCCESS',
    fail: 'FAI',
}

const dummyDelay = request => new Promise((resolve, reject) => {
   setTimeout(
       () => {
           request
               .then((data) => resolve(data))
               .catch((error) => reject(error))

    },
       1000,
   )
})

class DataSource {
    url = ''
    _status = null
    data = []
    onStatusChange

    constructor(uri, onStatusChange) {
        this.url = `http://localhost:3000${uri}`
        this.onStatusChange = onStatusChange
    }

    set status(value) {
        this.onStatusChange.next(value)
        this._status = value
    }

    async get() {
        this.status = STATUS.loading

        try {
            const response = await dummyDelay(axios.get(this.url))

            this.data = response.data
            this.status = STATUS.success

            return response.data
        } catch (error) {
            this.status = STATUS.fail
        }
    }

    async post(sale) {
        try {
            const orderDate = new Date();
            const response = await axios.post(
                this.url,
                {
                    id: v4(),
                    orderNumber: `${this.data.length + 1}/${orderDate.getFullYear()}`,
                    orderDate: orderDate.toJSON(),
                    sale
                }
            )

            this.data.push(response.data)
            this.status = STATUS.success
        } catch (error) {}
    }
}


export const dataSubject = new Subject()

export const registerSubject = (onLoad, onSuccess, onFail) => dataSubject.subscribe({
    next: (status) => {
        switch (status) {
            case STATUS.success: {
                return onSuccess()
            }
            case STATUS.fail: {
                return  onFail()
            }
            case STATUS.loading:
            default: {
                return onLoad()
            }
        }
    }
})

export const dataSource = new DataSource('/orders', dataSubject)

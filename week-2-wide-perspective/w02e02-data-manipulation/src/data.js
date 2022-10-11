
import axios from "axios";

const STATUS = {
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
       2000,
   )
})

class DataSource {
    url = ''
    // status = null
    // data = null

    constructor(uri) {
        this.url = `http://localhost:3000${uri}`
    }

    async fetch() {
        // this.status = STATUS.loading

        try {
            const response = await dummyDelay(axios.get(this.url))
            //
            // this.data = response.data
            // this.status = STATUS.success

            return response.data
        } catch (error) {
            // this.status = STATUS.fail
            return null
        }
    }
}

export const dataSource = new DataSource('/orders').fetch()

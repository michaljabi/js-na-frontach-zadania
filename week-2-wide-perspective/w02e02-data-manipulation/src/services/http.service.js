
const url = `http://localhost:3000/orders`

const axios = window.axios
export const getOrders = async () => {
    const res = await axios.get(url)
    console.log(res)
    return res.data
}
export const addOrder = async (order) => {
    const res = await axios.post(`http://localhost:3000/orders`,order)
    return res.data
}
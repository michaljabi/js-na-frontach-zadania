

const url = `http://localhost:3000/orders`


export const getOrders = async () => {
    const res = await fetch(url)
    return res.json()
}
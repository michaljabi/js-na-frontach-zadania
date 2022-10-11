export const getOrders = async () => {
  try {
    const response = await fetch('http://localhost:3000/orders')
    if (response.ok) {
      return await response.json()
    }
  } catch (e) {
    console.error(e)
  }
}
export const generateFakeOrderData = () => {
    const dateNow = new Date();
    return {
        orderDate: dateNow,
        orderNumber:dateNow.getMonth() + '/' + dateNow.getFullYear(),
        sale: Math.floor(Math.random() * (70032 - 123) + 123)
    }
}


export  const filterOrdersByYear = (data, year) => {
    const filteredOrders = data.filter(({ orderDate }) => {
      const dateYear = new Date(orderDate).getFullYear()
        return year == dateYear
    })
  return filteredOrders
    
  }
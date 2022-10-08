const componentId = 'annual-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const subTitle = mountPoint.querySelector('[data-subtitle]')
const panel = mountPoint.querySelector('[data-panel]')

// Uważaj na odfiltrowanie wg. roku (2022)
subTitle.textContent = 'Year 2022'
panel.innerHTML = ''
console.log(import.meta.env);
// Tutaj podobnie, powinniśmy interpretować dane z: ordersFakeData
fetch(`${import.meta.env.VITE_API}/orders`).then((response) => {
  response.json().then((orders) => {
    const filteredOrders = orders.filter(order => order.orderDate.startsWith('2022'))
    filteredOrders.forEach(order => {
      panel.appendChild(makeLiElement(order))
    })
  });
});

function makeLiElement({ orderDate, orderNumber }) {
  const li = document.createElement('li')
  li.className = 'panel-block'
  // Dodaj jakieś ładne formatowanie daty!
  li.innerText = `${orderNumber} | ${orderDate}`
  return li
}

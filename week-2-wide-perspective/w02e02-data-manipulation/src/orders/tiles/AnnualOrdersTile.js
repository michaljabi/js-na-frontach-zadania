import { axiosClient } from '../../utils/client';
import { $click } from './AddOrderButton';

const componentId = 'annual-orders';
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const subTitle = mountPoint.querySelector('[data-subtitle]');
const panel = mountPoint.querySelector('[data-panel]');

// Uważaj na odfiltrowanie wg. roku (2022)
subTitle.textContent = 'Year 2022';
panel.innerHTML = '';

const updateTile = async () => {
  panel.innerHTML = ''
  const { data = [] } = await axiosClient('/orders');
  const orders = data
    .filter((order) => new Date(order.orderDate).getFullYear() === 2022)
  // Tutaj podobnie, powinniśmy interpretować dane z: ordersFakeData
  
  for (const {orderDate, orderNumber} of orders) {
    panel.appendChild(makeLiElement({ orderDate, orderNumber }));
  }
}


function makeLiElement({ orderDate, orderNumber }) {
  const li = document.createElement('li');
  li.className = 'panel-block';
  // Dodaj jakieś ładne formatowanie daty!
  li.innerText = `${orderNumber} | ${new Date(orderDate).toLocaleDateString()}`;
  return li;
}

updateTile();

$click.subscribe(() => updateTile())

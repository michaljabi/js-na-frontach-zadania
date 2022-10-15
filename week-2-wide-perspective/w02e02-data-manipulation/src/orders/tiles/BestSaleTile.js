import { axiosClient } from '../../utils/client';
import { $click } from './AddOrderButton';

const componentId = 'best-sale';
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const content = mountPoint.querySelector('[data-content]');

// Ta wartość powinna pochodzić z kolekcji ordersFakeData

const updateTile = async () => {
    content.innerHTML = '';
  const { data = [] } = await axiosClient('/orders');
  const bestSaleOrder = data.reduce(
    (bestSale, nextOrder) =>
      bestSale < nextOrder.sale ? nextOrder.sale : bestSale,
    0
  );

  content.innerHTML = new Number(bestSaleOrder).toFixed(2);
};

updateTile();

$click.subscribe(() => updateTile());

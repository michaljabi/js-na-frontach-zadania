import { axiosClient } from '../../utils/client';
import { $click } from './AddOrderButton';

const componentId = 'total-income';
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const content = mountPoint.querySelector('[data-content]');

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData

const updateTile = async () => {
  content.innerHTML = '';
  const { data = [] } = await axiosClient('/orders');
  const totalIncome = data.reduce(
    (total, nextOrder) => total + nextOrder.sale,
    0
  );
  content.innerHTML = new Number(totalIncome).toFixed(2);
};

updateTile();

$click.subscribe(() => updateTile());

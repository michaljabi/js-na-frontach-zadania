import { axiosClient } from '../../utils/client';
import { $click } from './AddOrderButton';

const componentId = 'total-orders';
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
const content = mountPoint.querySelector('[data-content]');

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData

const updateTile = async () => {
  content.innerHTML = '';
  const { data = [] } = await axiosClient('/orders');
  content.innerHTML = data.length;
};

updateTile();

$click.subscribe(() => updateTile());

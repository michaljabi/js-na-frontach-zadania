import { faker } from '@faker-js/faker';
import { axiosClient } from '../../utils/client';
import { fromEvent } from 'rxjs';

const button = document.querySelector(`[data-button="add-order"]`);

button.addEventListener('click', async () => {
  const { data = [] } = await axiosClient('/orders');
  axiosClient.post('/orders/', {
    id: faker.datatype.uuid(),
    orderNumber: `${data.length + 1}/2022`,
    orderDate: new Date(),
    sale: faker.datatype.number(),
  });
});

export const $click = fromEvent(button, 'click');
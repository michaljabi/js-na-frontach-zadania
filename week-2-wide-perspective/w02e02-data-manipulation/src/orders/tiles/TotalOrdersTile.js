const componentId = 'total-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
fetch(`${import.meta.env.VITE_API}/orders`).then((response) => {
    response.json().then((orders) => {
        content.innerHTML = orders.length;
    });
});

const componentId = 'total-income'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
fetch(`${import.meta.env.VITE_API}/orders`).then((response) => {
    response.json().then((orders) => {
        const totalIncome = orders.reduce((total, order) => total + order.sale, 0);
        content.innerHTML = parseFloat(totalIncome).toFixed(2);
    });
});

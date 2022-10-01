export const getOrders = async () => {
  if (window.orders) {
    return window.orders;
  }

  let orders = await fetchOrders();

  window.orders = orders;

  return orders;
};

export const fetchOrders = async () => {
  return fetch("/orders", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((e) => console.error(e));
};

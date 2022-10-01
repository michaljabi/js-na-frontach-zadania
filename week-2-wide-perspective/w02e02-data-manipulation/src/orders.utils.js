export const getOrders = async () => {
  let orders = await fetchOrders();

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

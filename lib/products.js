const BASE_URL = "localhost:8000";

export const getProducts = () =>
  fetch(`http://${BASE_URL}/store/products/`).then((res) => res.json());

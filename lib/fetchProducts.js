import axios from "axios";
const BASE_URL = "localhost:8000";
export const fetchProducts = (page) =>
  axios(`http://${BASE_URL}/store/products/`).then(
    (response) => response.data.results
  );

export const fetchProductsPerPage = (page = 1) =>
  axios(`http://${BASE_URL}/store/products/?page=${page}`).then(
    (res) => res.data
  );

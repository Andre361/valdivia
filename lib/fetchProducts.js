import axios from "axios";
import { BASE_URL } from "constants";
export const fetchProducts = () =>
  axios(`https://agile-fortress-60729.herokuapp.com/store/products/`).then(
    (response) => response.data.results
  );

export const fetchProductsPerPage = (page = 1) =>
  axios(`http://${BASE_URL}/store/products/?page=${page}`).then(
    (res) => res.data
  );

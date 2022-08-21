import axios from "axios";
import { BASE_URL } from "constants";

export const fetchProductDetails = (url = `${BASE_URL}/store/products/`) =>
  axios.get(url).then((response) => response.data);

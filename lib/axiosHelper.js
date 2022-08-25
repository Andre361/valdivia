import axios from "axios";
import { BASE_URL } from "constants";
import client from "./axiosWrapper";

export const fetchProductDetails = (url = `${BASE_URL}/store/products/`) =>
  axios.get(url).then((response) => response.data);
export const fetchUserDetails = () => client(`${BASE_URL}/auth/users/me/`);

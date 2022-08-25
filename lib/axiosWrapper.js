import axios from "axios";
import { parseCookies } from "nookies";
const cookies = parseCookies();
let config = {
  headers: {
    Authorization: `JWT ${cookies.access}`,
  },
};
const client = axios.create(config);
client.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401 && cookies.refresh) {
      const response = await client(`${BASE_URL}/auth/auth/jwt/refresh/`);
      if (response.status === 200) {
        return client(error.config);
      } else {
        return Promise.reject(error);
      }
    }
    return error;
  }
);
export default client;

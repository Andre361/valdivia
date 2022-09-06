import axios from "axios";
import useAuthStore from "store/user";
const token = useAuthStore.getState().token;
let config = {
  headers: {
    Authorization: `JWT ${token}`,
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

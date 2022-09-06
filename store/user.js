import create from "zustand";
import { devtools } from "zustand/middleware";
import { parseCookies, destroyCookie } from "nookies";
const cookies = parseCookies();
const token = cookies.access ? cookies.access : "";
const useAuthStore = create(
  devtools((set) => ({
    userData: {},
    token,
    userIsAuthenticated: token != "",

    setUserData: (data) => set({ userData: data }),

    login: (access) => {
      set(() => ({ token: access, userIsAuthenticated: true }));
    },

    logout: () => {
      set(() => ({ userData: {}, token: "", userIsAuthenticated: false })),
        destroyCookie(null, "access");
    },
  }))
);
export default useAuthStore;

import create from "zustand";
import { devtools } from "zustand/middleware";
const useAuthStore = create(
  devtools((set) => ({
    user: {},
    // authenticated: false,

    setUser: (data) => set({ user: data }),
    removeUser: () => set({}, true),
    // authenticationToggle: (state) => !state.authenticate,
    // userIsAuthenticated: (state) => state.authenticated === true,
  }))
);

export default useAuthStore;

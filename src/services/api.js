import axios from "axios";
const BASE_URL = "http://142.93.102.94:4545/api/";
const axiosInstance = axios;
axiosInstance.defaults.baseURL = BASE_URL;

axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const API = {
  //Post Request

  registerUser: (payload) => axiosInstance.post("/auth/signup"),
  loginUser: (payload) => axiosInstance.post("/auth/signin", payload),
};

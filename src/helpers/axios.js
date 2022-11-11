import axios from "axios";

export const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.baseURL = "/api";
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Cors-Allow-Headers": "Content-Type, Authorization",
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

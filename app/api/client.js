import axios from "axios";
import authStorage from "../auth/storage";

const apiClient = axios.create({
  baseURL: "https://usub.mohsenmirzaei.dev/app/usub/api/v1",
});

apiClient.interceptors.request.use(
  async (config) => {
    const authToken = await authStorage.getInfo();
    if (authToken) {
      config.headers["authorization"] = authToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;

import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  limit: number;
  total: number;
  skip: number;
  products: T[];
}

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };
}

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export default ApiClient;

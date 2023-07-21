import axios, { AxiosRequestConfig } from "axios";
import Product from "../entities/Product";
import SavedProducts from "../entities/SavedProducts";

export interface FetchResponse<T> {
  limit: number;
  total: number;
  skip: number;
  products: T[];
}
class ApiClient<T> {
  endpoint: string;

  constructor(endpoint?: string) {
    this.endpoint = endpoint!;
  }

  getAll = async (config?: AxiosRequestConfig) => {
    return await axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = async (id: number | string) => {
    return await axiosInstance
      .get<T>(this.endpoint + `/${id}`)
      .then((res) => res.data);
  };

  checkout = (selectedItems: Product[]) => {
    return stripeAxiosInstance
      .post(this.endpoint, {
        selectedItems,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
        return res.data;
      });
  };

  setSavedProducts = async (userId: string, cart?: Product[]) => {
    await firebaseAxiosInstance.post(`/${userId}.json`, {
      userId,
      cart,
      orders: [{}],
    });
  };

  getSavedProducts = async (userId: string) => {
    return await firebaseAxiosInstance
      .get<SavedProducts>(`/${userId}.json`)
      .then((res) => res.data);
  };

  updateCartItem = async (
    userId: string,
    cartItems: Product[],
    orderedProducts: Product[]
  ) => {
    return await firebaseAxiosInstance
      .put<SavedProducts>(`/${userId}.json`, {
        orderedProducts,
        cart: cartItems,
        userId: userId,
      })
      .then((res) => res.data);
  };
}

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const firebaseAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_FIREBASE_URL,
});

export const stripeAxiosInstance = axios.create({
  baseURL: "https://stripapi.onrender.com/api",
}); 

export default ApiClient;

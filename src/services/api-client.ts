import axios, { AxiosRequestConfig } from "axios";
import { Product } from "../hooks/useProducts";
import { SavedProducts } from "../hooks/useSavedProducts";
import OrderedProductStore from "../store/OrderedProducts";

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
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + `/${id}`)
      .then((res) => res.data);
  };

  checkout = (orderedProduct: Product[], selectedItems: Product[]) => {
    return stripeAxiosInstance
      .post(this.endpoint, {
        selectedItems,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
        return res.data;
      })
      .catch(() => {
        const setOrderedProducts = OrderedProductStore(
          (s) => s.setOrderedProducts
        );
        setOrderedProducts(orderedProduct);
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
    const res = await firebaseAxiosInstance.get<SavedProducts>(
      `/${userId}.json`
    );
    return res.data;
  };

  updateCartItem = async (
    userId: string,
    cartItems: Product[],
    orderedProducts?: Product[]
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

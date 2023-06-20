import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
const apiClient = new ApiClient<Product>("/products");
const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: () => apiClient.getAll(),
  });

export default useProducts;

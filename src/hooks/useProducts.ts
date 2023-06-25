import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import productStore from "../store/ProductStore";

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

const useProducts = () => {
  const productQuery = productStore((s) => s.productQuery);
  const apiClient = new ApiClient<Product>(
    productQuery.category !== ""
      ? `products/category/${productQuery.category}`
      : productQuery.searchQuery !== ""
      ? "products/search"
      : "products"
  );
  return useQuery<FetchResponse<Product>, Error>({
    queryKey: ["products", productQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          limit: productQuery.limit,
          q: productQuery.searchQuery,
        },
      }),
    staleTime: ms("24h"),
    keepPreviousData: true,
  });
};

export default useProducts;

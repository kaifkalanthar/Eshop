import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Product } from "./useProducts";
import ms from "ms";

const useProduct = (id: number | string) => {
  const apiClient = new ApiClient<Product>("products");
  const { data, error, isLoading } = useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => apiClient.get(id),
    staleTime: ms("24h"),
  });

  return { data, error, isLoading };
};

export default useProduct;

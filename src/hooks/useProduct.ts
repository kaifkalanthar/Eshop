import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Product } from "./useProducts";

const useProduct = (id: number | string) => {
  const apiClient = new ApiClient<Product>("products");
  const { data, error, isLoading } = useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => apiClient.get(id),
  });

  return { data, error, isLoading };
};

export default useProduct;

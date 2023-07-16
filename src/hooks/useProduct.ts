import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Product from "../entities/Product";
import ApiClient from "../services/api-client";

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

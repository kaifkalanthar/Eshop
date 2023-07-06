import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import { Product } from "./useProducts";

const useTopProducts = () => {
  const apiClient = new ApiClient<Product>("/product");
  const { data, error, isLoading } = useQuery<FetchResponse<Product>, Error>({
    queryKey: ["top_rating_products"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          limit: 0,
        },
      }),
  });

  const topProducts = data?.products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
  return { topProducts, error, isLoading };
};

export default useTopProducts;

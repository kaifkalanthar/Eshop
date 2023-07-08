import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import userStore from "../store/UserStore";
import { Product } from "./useProducts";
import ms from "ms";

export interface SavedProducts {
  userId: string;
  cart: Product[];
  orderedProducts: Product[];
}

const useSavedProducts = () => {
  const apiClient = new ApiClient<SavedProducts>();
  const user = userStore((s) => s.user);
  const { data, error, isLoading } = useQuery<SavedProducts | any, Error>({
    queryKey: ["savedProducts"],
    queryFn: () => apiClient.getSavedProducts(user.uid),
    staleTime: ms("24hr"),
  });

  return { data, error, isLoading };
};

export default useSavedProducts;

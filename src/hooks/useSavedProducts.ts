import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import userStore from "../store/UserStore";
import { Product } from "./useProducts";

export interface SavedProducts {
  userId: string;
  cart: Product[];
  order: any[];
}

const useSavedProducts = () => {
  const user = userStore((s) => s.user);
  const apiClient = new ApiClient<SavedProducts>();
  const { data, error, isLoading } = useQuery<SavedProducts, Error>({
    queryKey: ["savedProducts"],
    queryFn: () => apiClient.getSavedProducts(user.uid),
  });

  return { data, error, isLoading };
};

export default useSavedProducts;

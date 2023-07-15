import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import userStore from "../store/UserStore";
import { Product } from "./useProducts";

export interface SavedProducts {
  userId: string;
  cart: Product[];
  orderedProducts: Product[];
}

const useSavedProducts = () => {
  const apiClient = new ApiClient<SavedProducts>();
  const user = userStore((s) => s.user);

  const { data, error, isLoading } = useQuery<SavedProducts, Error>({
    queryKey: ["user", user.uid, "saved_products"],
    queryFn: async () => await apiClient.getSavedProducts(user.uid),
  });
  return { data, error, isLoading };
};

export default useSavedProducts;

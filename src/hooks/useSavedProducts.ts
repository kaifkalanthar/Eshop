import { useQuery } from "@tanstack/react-query";
import SavedProducts from "../entities/SavedProducts";
import ApiClient from "../services/api-client";
import userStore from "../store/UserStore";


const useSavedProducts = (refetchOnMount: boolean = false) => {
  const apiClient = new ApiClient<SavedProducts>();
  const user = userStore((s) => s.user);

  const { data, error, isLoading, refetch } = useQuery<SavedProducts, Error>({
    queryKey: ["savedProducts"],
    queryFn: async () => await apiClient.getSavedProducts(user.uid),
    refetchOnMount: refetchOnMount,
  });

  return { data, error, isLoading, refetch };
};

export default useSavedProducts;

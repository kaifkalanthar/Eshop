import { useMutation, useQueryClient } from "@tanstack/react-query";
import SavedProducts from "../entities/SavedProducts";
import ApiClient from "../services/api-client";

const useUpdateSavedProducts = () => {
  const apiClient = new ApiClient();
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, isSuccess } = useMutation<
    SavedProducts,
    Error,
    SavedProducts
  >({
    mutationKey: ["update"],
    mutationFn: async (savedProducts: SavedProducts) =>
      await apiClient.updateCartItem(
        savedProducts.userId,
        savedProducts.cart,
        savedProducts.orderedProducts
      ),
    onMutate: (newProducts: SavedProducts) => {
      queryClient.setQueryData<SavedProducts>(
        ["savedProducts"],
        () => newProducts
      );
    },

    onSuccess: (savedProducts, newProducts) => {
      queryClient.setQueryData<SavedProducts>(["savedProducts"], (products) =>
        products === newProducts ? savedProducts : products
      );
    },
  });

  return { mutate, data, isLoading, isSuccess };
};

export default useUpdateSavedProducts;

import { useMutation } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import { Product } from "./useProducts";

const addSavedProduct = () => {
  const apiClient = new ApiClient<Product>();
  const user = userStore((s) => s.user);
  const setCartItem = CheckoutStore((s) => s.setCheckoutItems);
  return useMutation({
    mutationFn: (data: Product[]) => apiClient.setSavedProducts(user.uid, data),
    onSuccess: (savedCartItems, newCartItems) => {
      console.log(savedCartItems);
      setCartItem(newCartItems);
    },
  });
};

export default addSavedProduct;

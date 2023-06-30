import { useMutation } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import userStore from "../store/UserStore";
import { Product } from "./useProducts";

const addCartItem = () => {
  const apiClient = new ApiClient<Product>();
  const user = userStore((s) => s.user);
  return useMutation({
    mutationFn: (cartItems: Product[]) =>
      apiClient.updateCartItem(user.uid, cartItems),
  });
};

export default addCartItem;

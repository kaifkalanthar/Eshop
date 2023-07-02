import { useState } from "react";
import { Product } from "../hooks/useProducts";
import useSavedProducts from "../hooks/useSavedProducts";
import ApiClient from "../services/api-client";
import userStore from "../store/UserStore";
import CustomButton from "./CustomButton";

interface Props {
  label: string;
  data: Product[];
}
const CheckoutButton = ({ data, label }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: cartItems } = useSavedProducts();
  const user = userStore((s) => s.user);
  const handleCheckout = async (selectedItems: Product[]) => {
    setIsLoading(true);
    const apiClient = new ApiClient("/stripe/create-checkout-session");
    let orderedProducts: Product[] = [];
    if (cartItems?.orderedProducts) {
      orderedProducts = [...cartItems.orderedProducts, ...selectedItems];
    } else {
      orderedProducts = [...selectedItems];
    }
    console.log(orderedProducts);
    try {
      if (cartItems) {
        await apiClient.updateCartItem(
          user.uid,
          cartItems?.cart,
          orderedProducts
        );
      }
      await apiClient.checkout(orderedProducts, selectedItems);
    } catch (error) {
      apiClient.updateCartItem(user.uid, data);
    }
    setIsLoading(false);
  };

  return (
    <CustomButton handleOnclick={() => handleCheckout(data)} width="100%">
      {isLoading ? "Processing" : label}
    </CustomButton>
  );
};

export default CheckoutButton;

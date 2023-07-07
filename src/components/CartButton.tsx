import { useToast } from "@chakra-ui/react";
import ms from "ms";
import { useState } from "react";
import { Product } from "../hooks/useProducts";
import useSavedProducts from "../hooks/useSavedProducts";
import ApiClient from "../services/api-client";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import CustomButton from "./CustomButton";

interface Props {
  product: Product;
}

const CartButton = ({ product }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const user = userStore((s) => s.user);
  const { checkoutItems, setCheckoutItems } = CheckoutStore();
  const getSavedProducts = useSavedProducts();
  const apiClient = new ApiClient();

  const handleCartButton = async (product: Product) => {
    if (!user.uid) {
      return toast({
        title: "Login or Sign up",
        status: "info",
        duration: ms("5s"),
        isClosable: false,
        position: "top",
      });
    }

    setCheckoutItems([...checkoutItems, product]);
    setIsLoading(true);
    const data = await apiClient.getSavedProducts(user.uid);
    let cartItems: Product[] = [];
    if (data === undefined) {
      cartItems = [product];
      await apiClient.updateCartItem(
        user.uid,
        [product],
        getSavedProducts.data?.orderedProducts
      );
    } else {
      cartItems = [...checkoutItems, product];
      await apiClient.updateCartItem(
        user.uid,
        cartItems,
        getSavedProducts.data?.orderedProducts
      );
    }
    setIsLoading(false);
    toast({
      title: "Added to cart",
      status: "success",
      duration: ms("5s"),
      isClosable: false,
      position: "top",
    });
  };
  return (
    <CustomButton
      width={"100%"}
      handleOnclick={() => handleCartButton(product)}
    >
      {isLoading ? "Adding" : "+ Cart"}
    </CustomButton>
  );
};

export default CartButton;

import { Icon, useToast } from "@chakra-ui/react";
import ms from "ms";
import { useState } from "react";
import { Product } from "../hooks/useProducts";
import useSavedProducts from "../hooks/useSavedProducts";
import ApiClient from "../services/api-client";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import CustomButton from "./CustomButton";
import ErrorPage from "./ErrorPage";
import { debounce } from "lodash";
import { BsCartPlus } from "react-icons/bs";

interface Props {
  product: Product;
}

const CartButton = ({ product }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const user = userStore((s) => s.user);
  const { checkoutItems, increaseQuantity, setCheckoutItems } = CheckoutStore();
  const isCartItem = checkoutItems.find((items) => items.id === product.id);
  const { data, error } = useSavedProducts();
  if (error) return <ErrorPage />;
  const apiClient = new ApiClient();

  const handleCartButton = debounce(async (product: Product) => {
    if (!user.uid) {
      return toast({
        title: "Login or Sign up",
        status: "info",
        duration: ms("5s"),
        isClosable: false,
        position: "top",
      });
    }

    if (isCartItem) {
      increaseQuantity(product);
      apiClient.updateCartItem(user.uid, checkoutItems, data?.orderedProducts);
      return toast({
        title: "Added to cart",
        status: "success",
        duration: ms("5s"),
        isClosable: false,
        position: "top",
      });
    } else {
      setCheckoutItems([product, ...checkoutItems]);
      setIsLoading(true);
      const data = await apiClient.getSavedProducts(user.uid);
      let cartItems: Product[] = [];
      if (data.cart === undefined) {
        cartItems = [product];
        await apiClient.updateCartItem(
          user.uid,
          [product],
          data.orderedProducts
        );
      } else {
        cartItems = [product, ...checkoutItems];
        await apiClient.updateCartItem(
          user.uid,
          cartItems,
          data?.orderedProducts
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
    }
  }, 300);

  return (
    <CustomButton
      width={"50px"}
      valid={isLoading}
      handleOnclick={() => handleCartButton(product)}
    >
      {isLoading ? "..." : <Icon as={BsCartPlus} boxSize={5} />}
    </CustomButton>
  );
};

export default CartButton;

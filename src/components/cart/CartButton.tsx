import { Icon, Text, useToast } from "@chakra-ui/react";
import ms from "ms";
import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import Product from "../../entities/Product";
import useSavedProducts from "../../hooks/useSavedProducts";
import ApiClient from "../../services/api-client";
import CheckoutStore from "../../store/CheckoutStore";
import userStore from "../../store/UserStore";
import CustomButton from "../button/CustomButton";
import ErrorPage from "../../pages/ErrorPage";
import useUpdateSavedProducts from "../../hooks/useUpdateSavedProducts";

interface Props {
  product: Product;
}

const CartButton = ({ product }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const user = userStore((s) => s.user);
  const { checkoutItems, increaseQuantity, setCheckoutItems } = CheckoutStore();

  const isCartItem = checkoutItems
    ? checkoutItems.find((items) => items.id === product.id)
    : null;
  const [quantity, setQuantity] = useState(
    !isCartItem?.quantity ? 1 : isCartItem?.quantity
  );
  const { data, error } = useSavedProducts();
  const { mutate } = useUpdateSavedProducts();

  if (error) return <ErrorPage />;
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
    // If item already in cart, Increase the quantity of the product
    if (isCartItem) {
      increaseQuantity(product);
      setQuantity(quantity < 10 ? quantity + 1 : 10);
      if (quantity === 10) return;
      setIsLoading(true);
      let temp = [...checkoutItems];
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === product.id) {
          temp[i].quantity = quantity + 1;
        }
      }
      if (data?.orderedProducts)
        mutate({
          userId: user.uid,
          cart: temp,
          orderedProducts: data?.orderedProducts,
        });
      setIsLoading(false);
    }
    // Otherwise, add to cart
    else {
      setCheckoutItems([product, ...(checkoutItems || [])]);
      setIsLoading(true);
      const data = await apiClient.getSavedProducts(user.uid);
      let cartItems: Product[] = [];
      if (data.cart === undefined) {
        cartItems = [product];
        mutate({
          userId: user.uid,
          cart: cartItems,
          orderedProducts: data?.orderedProducts ? data.orderedProducts : [],
        });
      } else {
        cartItems = [product, ...checkoutItems];
        mutate({
          userId: user.uid,
          cart: cartItems,
          orderedProducts: data?.orderedProducts ? data.orderedProducts : [],
        });
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
  };

  return (
    <CustomButton
      width={"50px"}
      valid={isLoading}
      handleOnclick={() => handleCartButton(product)}
    >
      {isLoading ? (
        "..."
      ) : (
        <>
          <Icon as={BsCartPlus} boxSize={5} />{" "}
          <Text>{quantity > 1 && quantity}</Text>
        </>
      )}
    </CustomButton>
  );
};

export default CartButton;

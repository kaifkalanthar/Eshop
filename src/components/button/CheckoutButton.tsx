import { useToast } from "@chakra-ui/react";
import ms from "ms";
import { useState } from "react";
import Product from "../../entities/Product";
import useSavedProducts from "../../hooks/useSavedProducts";
import ApiClient from "../../services/api-client";
import userStore from "../../store/UserStore";
import CustomButton from "./CustomButton";
import useUpdateSavedProducts from "../../hooks/useUpdateSavedProducts";

interface Props {
  label: string;
  data: Product[];
}
const CheckoutButton = ({ data, label }: Props) => {
  const user = userStore((s) => s.user);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { data: cartItems } = useSavedProducts();
  const { mutate } = useUpdateSavedProducts();

  const handleCheckout = async (selectedItems: Product[]) => {
    if (!user.uid)
      return toast({
        title: "Login or Sign up",
        status: "info",
        duration: ms("5s"),
        isClosable: false,
        position: "top",
      });
    setIsLoading(true);
    const apiClient = new ApiClient("/stripe/create-checkout-session");
    let orderedProducts: Product[] = [];
    if (cartItems?.orderedProducts) {
      orderedProducts = [...cartItems.orderedProducts, ...selectedItems];
    } else {
      orderedProducts = [...selectedItems];
    }

    mutate({
      userId: user.uid,
      cart: cartItems?.cart || [],
      orderedProducts: orderedProducts,
    });
    await apiClient.checkout(selectedItems);
    setIsLoading(false);
  };

  return (
    <CustomButton handleOnclick={() => handleCheckout(data)} width="100%">
      {isLoading ? "Processing" : label}
    </CustomButton>
  );
};

export default CheckoutButton;

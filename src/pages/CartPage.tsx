import { GridItem, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import CartSummary from "../components/cart/CartSummary";
import CheckoutButton from "../components/button/CheckoutButton";
import useSavedProducts from "../hooks/useSavedProducts";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import CartItemsCard from "../components/cart/CartItemsCard";

const CartItems = () => {
  const user = userStore((s) => s.user);
  if (!user) return <Navigate to="/login" />;
  const { data, isLoading } = useSavedProducts();
  const checkoutItems = CheckoutStore((s) => s.checkoutItems);
  const setCheckoutItems = CheckoutStore((s) => s.setCheckoutItems);

  useEffect(() => {
    if (data?.cart) setCheckoutItems(data?.cart);
  }, [data]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={10}>
        <GridItem>
          <Stack spacing={5}>
            {checkoutItems?.map((item, index) => (
              <CartItemsCard key={index} cart={item} />
            ))}
          </Stack>
        </GridItem>

        <GridItem mx={"auto"} textAlign={"center"} maxWidth={"100%"}>
          <CartSummary />
          <CheckoutButton label="Checkout" data={checkoutItems} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default CartItems;

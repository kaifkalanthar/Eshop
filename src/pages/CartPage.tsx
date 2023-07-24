import { GridItem, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import CheckoutButton from "../components/button/CheckoutButton";
import CartItemsCard from "../components/cart/CartItemsCard";
import CartSummary from "../components/cart/CartSummary";
import useSavedProducts from "../hooks/useSavedProducts";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import NoItems from "../components/cart/NoItems";
import ErrorPage from "./ErrorPage";

const CartPage = () => {
  document.title = "TrendiFy | Cart";
  const user = userStore((s) => s.user);
  if (!user) return <Navigate to="/login" />;
  const checkoutItems = CheckoutStore((s) => s.checkoutItems);
  const { data, error, isLoading } = useSavedProducts(true); //Dynamically setting refetchOnMount
  if (isLoading) return <Spinner />;
  if ((checkoutItems && checkoutItems.length === 0) || !data?.cart)
    return <NoItems />;
  if (error) return <ErrorPage />;
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={10} my={5}>
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

export default CartPage;

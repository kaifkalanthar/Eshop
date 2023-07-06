import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import useSavedProducts from "../hooks/useSavedProducts";
import CheckoutStore from "../store/CheckoutStore";
import CartItemsCard from "./CartItemsCard";
import CheckoutButton from "./CheckoutButton";
import userStore from "../store/UserStore";
import { Navigate } from "react-router-dom";
import NoItems from "./NoItems";

const CartItems = () => {
  const user = userStore((s) => s.user);
  if (!user.uid) <Navigate to="/login" />;
  const { isLoading } = useSavedProducts();
  const checkoutItems = CheckoutStore((s) => s.checkoutItems);
  if (isLoading) return <Spinner />;
  if (checkoutItems.length === 0) return <NoItems />;
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
        <GridItem>
          <Stack spacing={5}>
            {checkoutItems?.map((item, index) => (
              <CartItemsCard key={index} cart={item} />
            ))}
          </Stack>
        </GridItem>

        <GridItem mx={"auto"} textAlign={"center"}>
          <Heading fontWeight={"light"} mb={5}>
            Total amount{" "}
            <span style={{ fontWeight: "bold", color: "#ff69b4" }}>
              $
              {checkoutItems?.reduce((total, item) => {
                return total + item.price;
              }, 0)}
            </span>
          </Heading>

          <CheckoutButton label="Checkout" data={checkoutItems} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default CartItems;

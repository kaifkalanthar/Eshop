import {
  GridItem,
  Heading,
  Show,
  SimpleGrid,
  Spinner,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import CartItemsCard from "./CartItemsCard";
import CheckoutButton from "./CheckoutButton";
import NoItems from "./NoItems";
import { getDiscount } from "./ProductAttributes";
import { useEffect } from "react";
import useSavedProducts from "../hooks/useSavedProducts";

const CartItems = () => {
  const user = userStore((s) => s.user);
  if (!user) return <Navigate to="/login" />;
  const { data, isLoading } = useSavedProducts();
  const { checkoutItems, setCheckoutItems } = CheckoutStore();
  useEffect(() => {
    if (data?.cart) setCheckoutItems(data?.cart);
  }, [data]);
  if (isLoading) return <Spinner />;

  if (!data?.cart && checkoutItems.length === 0) return <NoItems />;
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
          <Show above="md">
            <TableContainer mb={5}>
              <Table variant={"striped"} colorScheme="pink">
                <Thead>
                  <Tr>
                    <Th>Product Name</Th>
                    <Th>Quantity</Th>
                    <Th>Price</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {checkoutItems.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.title}</Td>
                      <Td>{!item.quantity ? 1 : item.quantity}</Td>
                      <Td>
                        {getDiscount(item.price, item.discountPercentage)}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Show>
          <Heading fontWeight={"light"} mb={5}>
            Total amount{" "}
            <span style={{ fontWeight: "bold", color: "#ff69b4" }}>
              $
              {checkoutItems?.reduce((total, item) => {
                const discount = getDiscount(
                  item.price,
                  item.discountPercentage
                );
                total += discount * (!item.quantity ? 1 : item.quantity);
                return total;
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

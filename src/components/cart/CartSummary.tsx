import {
  Heading,
  Show,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import CheckoutStore from "../../store/CheckoutStore";
import { getDiscount } from "../product/ProductAttributes";

const CartSummary = () => {
  const checkoutItems = CheckoutStore((s) => s.checkoutItems);
  return (
    <>
      <Show above="md">
        <Heading
          fontSize={"2xl"}
          fontWeight={"light"}
          textAlign={"start"}
          py={5}
        >
          Summary
        </Heading>
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
                  <Td>{getDiscount(item.price, item.discountPercentage)}</Td>
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
          {checkoutItems &&
            checkoutItems?.reduce((total, item) => {
              const discount = getDiscount(item.price, item.discountPercentage);
              total += discount * (!item.quantity ? 1 : item.quantity);
              return total;
            }, 0)}
        </span>
      </Heading>
    </>
  );
};

export default CartSummary;

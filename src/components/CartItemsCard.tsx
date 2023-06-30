import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Product } from "../hooks/useProducts";
import ApiClient from "../services/api-client";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import { getDiscount } from "./ProductAttributes";

interface Props {
  cart: Product;
}
const CartItemsCard = ({ cart }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const user = userStore((s) => s.user);
  const { checkoutItems, setCheckoutItems } = CheckoutStore();
  const apiClient = new ApiClient<Product>();

  const handleDelete = (cart: Product) => {
    setCheckoutItems(checkoutItems.filter((item) => item.id !== cart.id));
    apiClient.updateCartItem(
      user.uid,
      checkoutItems.filter((item) => item.id !== cart.id)
    );
  };
  return (
    <HStack
      borderRadius={10}
      width="100%"
      overflow={"hidden"}
      border="2px solid #F2BED1"
    >
      <Box width="100%">
        <Image width="100px" objectFit={"contain"} src={cart.images[0]} />
      </Box>
      <Stack paddingX={5} width={"100%"}>
        <Heading fontSize={"xl"} fontWeight={"light"}>
          {cart.title}
        </Heading>
        <HStack justify="space-between">
          <HStack>
            <Heading fontSize="xl">
              ${getDiscount(cart?.price, cart.discountPercentage)}
            </Heading>
            <Text textDecoration={"line-through"}>${cart.price}</Text>
          </HStack>
        </HStack>
        <HStack>
          <Button
            onClick={() => setQuantity(quantity < 10 ? quantity + 1 : 10)}
          >
            +
          </Button>
          <Text paddingX={2}>{quantity}</Text>
          <Button onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>
            -
          </Button>
          <Button
            width="10%"
            colorScheme="red"
            onClick={() => handleDelete(cart)}
          >
            <Icon as={AiOutlineDelete} />
          </Button>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default CartItemsCard;

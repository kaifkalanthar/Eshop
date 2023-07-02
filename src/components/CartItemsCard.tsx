import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { Product } from "../hooks/useProducts";
import useSavedProducts from "../hooks/useSavedProducts";
import ApiClient from "../services/api-client";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import { getDiscount } from "./ProductAttributes";

interface Props {
  cart: Product;
}
const CartItemsCard = ({ cart }: Props) => {
  const user = userStore((s) => s.user);
  const { checkoutItems, setCheckoutItems } = CheckoutStore();
  const { data, error, isLoading } = useSavedProducts();
  if (isLoading) return <Spinner />;

  if (error) return <Heading>Unexpected error occurred</Heading>;
  const apiClient = new ApiClient<Product>();

  const handleDelete = (cart: Product) => {
    setCheckoutItems(checkoutItems.filter((item) => item.id !== cart.id));
    apiClient.updateCartItem(
      user.uid,
      checkoutItems.filter((item) => item.id !== cart.id),
      data?.orderedProducts
    );
  };
  return (
    <HStack
      marginX={"auto"}
      borderRadius={10}
      overflow={"hidden"}
      minWidth={["260px", "420px"]}
    >
      <Box>
        <Image
          width="160px"
          height="90px"
          objectFit={"fill"}
          src={cart.images[0]}
        />
      </Box>
      <Stack paddingX={2} width={"100%"}>
        <Heading fontSize={"xl"} fontWeight={"light"}>
          {cart.title}
        </Heading>

        <HStack justify={"space-between"}>
          <HStack>
            <Heading fontSize="xl">
              ${getDiscount(cart?.price, cart.discountPercentage)}
            </Heading>
            <Text textDecoration={"line-through"}>${cart.price}</Text>
          </HStack>
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

import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Product } from "../hooks/useProducts";
import useSavedProducts from "../hooks/useSavedProducts";
import ApiClient from "../services/api-client";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import { getDiscount } from "./ProductAttributes";
import { useEffect } from "react";


interface Props {
  cart: Product;
}
const CartItemsCard = ({ cart }: Props) => {
  const user = userStore((s) => s.user);
  const {
    checkoutItems,
    setCheckoutItems,
    increaseQuantity,
    decreaseQuantity,
  } = CheckoutStore();
  const { data, error, isLoading } = useSavedProducts();
  if (!cart.quantity) cart.quantity = 1;
  if (isLoading) return <Spinner />;
  if (error) return <Heading>Unexpected error occurred</Heading>;
  const apiClient = new ApiClient<Product>();

  useEffect(() => {
    apiClient.updateCartItem(user.uid, checkoutItems, data?.orderedProducts);
  }, [checkoutItems]);

  const handleDelete = async (cart: Product) => {
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
      maxW={"420px"}
      minW={["260px", "420px"]}
    >
      <Box>
        <Image
          width={["140px", "160px"]}
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
          <HStack>
            <ButtonGroup isAttached variant="outline" size="sm">
              <IconButton
                aria-label="add"
                icon={<IoMdAdd />}
                onClick={() => {
                  increaseQuantity(cart);
                }}
              />
              <Button px={2}>{cart.quantity}</Button>
              <IconButton
                aria-label="sub"
                icon={<IoMdRemove />}
                onClick={() => {
                  decreaseQuantity(cart);
                }}
              />
            </ButtonGroup>
            <Button
              size="sm"
              width="10%"
              colorScheme="red"
              onClick={() => handleDelete(cart)}
            >
              <Icon as={AiOutlineDelete} />
            </Button>
          </HStack>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default CartItemsCard;

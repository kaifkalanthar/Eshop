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
import { Product } from "../hooks/useProducts";
import useSavedProducts from "../hooks/useSavedProducts";
import ApiClient from "../services/api-client";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import { getDiscount } from "./ProductAttributes";
import { useEffect, useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

interface Props {
  cart: Product;
}
const CartItemsCard = ({ cart }: Props) => {
  const [counter, setCounter] = useState(!cart.quantity ? 1 : cart.quantity);
  const user = userStore((s) => s.user);
  const { checkoutItems, setCheckoutItems } = CheckoutStore();
  const carts: Product[] = checkoutItems;
  const { data, error, isLoading } = useSavedProducts();
  if (isLoading) return <Spinner />;
  if (error) return <Heading>Unexpected error occurred</Heading>;

  const apiClient = new ApiClient<Product>();
  const updateCounter = async () => {
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].id === cart.id) {
        carts[i].quantity = counter;
        await apiClient.updateCartItem(user.uid, carts, data?.orderedProducts);
        setCheckoutItems(carts);
      }
    }
  };
  useEffect(() => {
    updateCounter();
  }, [counter]);

  const handleDelete = async (cart: Product) => {
    setCheckoutItems(checkoutItems.filter((item) => item.id !== cart.id));
    await apiClient.updateCartItem(
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
            <ButtonGroup isAttached variant="outline" size="sm">
              <IconButton
                aria-label="add"
                icon={<IoMdAdd />}
                onClick={() => setCounter(counter < 10 ? counter + 1 : 10)}
              />
              <Button px={2}>{cart.quantity}</Button>
              <IconButton
                aria-label="sub"
                icon={<IoMdRemove />}
                onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}
              />
            </ButtonGroup>
          </HStack>
          <Button
            size="sm"
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

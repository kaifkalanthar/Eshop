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
} from "@chakra-ui/react";

import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Product from "../../entities/Product";
import useSavedProducts from "../../hooks/useSavedProducts";
import useUpdateSavedProducts from "../../hooks/useUpdateSavedProducts";
import CheckoutStore from "../../store/CheckoutStore";
import userStore from "../../store/UserStore";
import { getDiscount } from "../product/ProductAttributes";

interface Props {
  cart: Product;
}
const CartItemsCard = ({ cart }: Props) => {
  const user = userStore((s) => s.user);
  const checkoutItems = CheckoutStore((s) => s.checkoutItems);
  const [counter, setCounter] = useState(cart.quantity ? cart.quantity : 1);
  const increaseQuantity = CheckoutStore((s) => s.increaseQuantity);
  const decreaseQuantity = CheckoutStore((s) => s.decreaseQuantity);
  const { data, error, isLoading } = useSavedProducts(true);
  if (!cart.quantity) cart.quantity = 1;
  if (isLoading) return <Spinner />;
  if (error) return <Heading>Unexpected error occurred</Heading>;
  const handleIncreaseButton = () => {
    if (counter === 10) return;
    setCounter(counter + 1);
    increaseQuantity(cart);
    const temp = checkoutItems;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === cart.id) {
        if (!cart.quantity) {
          temp[i].quantity = 1;
        } else {
          temp[i].quantity += 1;
        }
      }
    }
    mutate({
      userId: user.uid,
      cart: temp,
      orderedProducts: data?.orderedProducts || [],
    });
  };

  const handleDecreaseButton = () => {
    if (counter === 1) return;
    setCounter(counter - 1);
    decreaseQuantity(cart);
    const temp = checkoutItems;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === cart.id) {
        if (!cart.quantity) {
          temp[i].quantity = 1;
        } else {
          temp[i].quantity -= 1;
        }
      }
    }
    mutate({
      userId: user.uid,
      cart: temp,
      orderedProducts: data?.orderedProducts || [],
    });
  };
  const { mutate } = useUpdateSavedProducts();

  return (
    <>
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
            minW={"100px"}
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
              {/* <Text textDecoration={"line-through"}>${cart.price}</Text> */}
            </HStack>
            <HStack>
              <ButtonGroup isAttached variant="outline" size="sm">
                <IconButton
                  aria-label="add"
                  icon={<IoMdAdd />}
                  onClick={() => {
                    handleIncreaseButton();
                  }}
                />
                <Button px={2}>{cart.quantity}</Button>
                <IconButton
                  aria-label="sub"
                  icon={<IoMdRemove />}
                  onClick={() => {
                    handleDecreaseButton();
                  }}
                />
              </ButtonGroup>
              <Button
                size="sm"
                width="10%"
                colorScheme="red"
                onClick={() => {
                  mutate({
                    userId: user.uid,
                    cart: checkoutItems.filter((item) => item.id !== cart.id),
                    orderedProducts: data?.orderedProducts || [],
                  });
                }}
              >
                <Icon as={AiOutlineDelete} />
              </Button>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
    </>
  );
};

export default CartItemsCard;

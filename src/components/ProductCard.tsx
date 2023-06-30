import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import ms from "ms";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../hooks/useProducts";
import ApiClient from "../services/api-client";
import userStore from "../store/UserStore";
import CustomButton from "./CustomButton";
import { getDiscount } from "./ProductAttributes";
import ProductRating from "./ProductRating";
import CheckoutStore from "../store/CheckoutStore";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const user = userStore((s) => s.user);
  const navigate = useNavigate();
  const toast = useToast();
  const { checkoutItems, setCheckoutItems } = CheckoutStore();
  const apiClient = new ApiClient();

  const handleCartButton = async (product: Product) => {
    if (!user.uid) {
      navigate("/login");
    }

    setCheckoutItems([...checkoutItems, product]);
    const data = await apiClient.getSavedProducts(user.uid);
    let cartItems: Product[] = [];
    if (data === undefined) {
      cartItems = [product];
      apiClient.updateCartItem(user.uid, [product]);
    } else {
      cartItems = [...checkoutItems, product];
      apiClient.updateCartItem(user.uid, cartItems);
    }
    toast({
      title: "Added to cart",
      status: "success",
      duration: ms("5s"),
      isClosable: false,
      position: "top",
    });
  };
  return (
    <Card shadow="none">
      <Link to={`/products/${product.id}`}>
        <Box maxHeight="350px" overflow="hidden">
          <Image src={product.images[0]} width="100%" />
        </Box>
      </Link>

      <CardBody>
        <Stack spacing={2}>
          <Link to={`/products/${product.id}`}>
            <HStack justify="space-between">
              <Heading size={"md"} fontWeight="thin">
                {product.title}
              </Heading>
              <ProductRating
                rating={getDiscount(product.price, product.discountPercentage)}
              />
              <Text textDecoration={"line-through"}>{product.price}</Text>
            </HStack>
          </Link>
          <HStack justify="space-between">
            <Heading size="md">{`$${product.price}`}</Heading>
            <CustomButton
              width={100}
              handleOnclick={() => handleCartButton(product)}
            >
              Cart
            </CustomButton>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

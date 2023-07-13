import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Product } from "../hooks/useProducts";
import CartButton from "./CartButton";
import { getDiscount } from "./ProductAttributes";
import ProductRating from "./ProductRating";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card shadow="none">
      <Link to={`/products/${product.id}`}>
        <Box maxHeight="350px" overflow="hidden">
          <Image
            src={product.images[0]}
            width="100%"
            height={["150px", "200px"]}
          />
        </Box>
      </Link>

      <CardBody>
        <Stack spacing={2}>
          <Link to={`/products/${product.id}`}>
            <Flex justify="space-between" direction={["column", "row"]} gap={2}>
              <Heading size={"md"} fontWeight="hairline">
                {product.title}
              </Heading>
              <Box>
                <ProductRating rating={product.rating} />
              </Box>
            </Flex>
          </Link>
          <Flex justify="space-between" direction={["column", "row"]} gap={5}>
            <HStack>
              <Heading size="md">
                ${getDiscount(product.price, product.rating)}
              </Heading>
              <Text textDecoration={"line-through"}>${product.price}</Text>
            </HStack>

            <CartButton product={product} />
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

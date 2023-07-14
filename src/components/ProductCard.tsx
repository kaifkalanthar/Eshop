import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
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
    <Card shadow="none" padding={2}>
      <Link to={`/products/${product.id}`}>
        <Box maxHeight="350px">
          <Image
            borderRadius={10}
            src={product.images[0]}
            width="100%"
            height={["150px", "200px"]}
          />
        </Box>
      </Link>

      <CardBody paddingX={0}>
        <Stack spacing={2}>
          <Link to={`/products/${product.id}`}>
            <Flex justify="space-between" direction={["column", "row"]} gap={2}>
              <Heading size={"md"} fontWeight={"thin"}>
                {product.title}
              </Heading>
              <Box>
                <ProductRating rating={product.rating} />
              </Box>
            </Flex>
          </Link>
          <Divider />
          <Flex justify="space-between" gap={5}>
            <HStack>
              <Heading size="md">
                ${getDiscount(product.price, product.rating)}
              </Heading>
            </HStack>
            <CartButton product={product} />
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

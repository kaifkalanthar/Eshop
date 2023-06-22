import ProductRating from "./ProductRating";
import {
  Card,
  CardBody,
  Stack,
  HStack,
  Heading,
  Box,
  Image,
  Divider,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { Product } from "../hooks/useProducts";
interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  return (
    <Card shadow="none">
      <Box maxHeight="350px" overflow="hidden">
        <Image
          src={product.images[1] ? product.images[1] : product.images[0]}
          width="100%"
        />
      </Box>
      <Divider color="gray.200" />
      <CardBody>
        <Stack spacing={2}>
          <HStack justify="space-between">
            <Heading size={"md"} fontWeight="thin">
              {product.title}
            </Heading>
            <ProductRating rating={product.rating} />
          </HStack>
          <HStack justify="space-between">
            <Heading size="md">{`$${product.price}`}</Heading>
            <CustomButton width={100}>Cart</CustomButton>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

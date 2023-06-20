import ProductRating from "./ProductRating";
import {
  Card,
  CardBody,
  Stack,
  HStack,
  Heading,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { Product } from "../hooks/useProducts";
interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  return (
    <Card boxShadow={"none"} minHeight="100%">
      <Box>
        <Image
          src={product.images[1] ? product.images[1] : product.images[0]}
          maxHeight="300px"
          width="100%"
        />
      </Box>
      <CardBody>
        <Stack spacing={2}>
          <HStack justify="space-between">
            <Heading size={"md"}>{product.title}</Heading>
            <ProductRating rating={product.rating} />
          </HStack>
          <Text fontSize={"sm"}>{product.description}</Text>
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

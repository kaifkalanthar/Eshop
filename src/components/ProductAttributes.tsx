import { Stack, HStack, Heading, Icon, Text } from "@chakra-ui/react";
import { AiOutlineLaptop } from "react-icons/ai";
import ProductRating from "./ProductRating";
import { Product } from "../hooks/useProducts";
interface Props {
  data: Product;
}

export const getDiscount = (productPrice: number, discount: number) => {
  return Math.round(productPrice - productPrice * (discount / 100));
};

const ProductAttributes = ({ data }: Props) => {
  return (
    <>
      <Heading>{data?.title}</Heading>
      <Text>{data?.description}</Text>
      <Stack spacing={3} py={10}>
        <HStack>
          <Heading>
            ${getDiscount(data?.price!, data?.discountPercentage!)}
          </Heading>
          <Text textDecoration={"line-through"}>${data?.price}</Text>
        </HStack>

        <Text>{"Discount " + data?.discountPercentage + "%"}</Text>
        <ProductRating rating={data?.rating!} />

        <Text>Category</Text>
        <Icon as={AiOutlineLaptop} boxSize={50} />

        <Heading color="green" fontSize="md">
          In Stock
        </Heading>
        <Text>Total: {data?.stock}</Text>
      </Stack>
    </>
  );
};

export default ProductAttributes;

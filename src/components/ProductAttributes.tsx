import { Stack, HStack, Heading, Icon, Text, Badge } from "@chakra-ui/react";
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
      <Heading marginBottom={5} fontWeight={"normal"}>
        {data?.title}
      </Heading>
      <HStack>
        <Heading>
          ${getDiscount(data?.price!, data?.discountPercentage!)}
        </Heading>
        <Text color={"gray.400"} textDecoration={"line-through"}>
          ${data?.price}
        </Text>
      </HStack>

      <Stack spacing={3} py={10}>
        <Text>{data?.description}</Text>
        <Badge colorScheme="red" width={"90px"} textAlign="center" padding={2}>
          {data?.discountPercentage + "% off"}
        </Badge>
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

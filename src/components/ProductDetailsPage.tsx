import {
  GridItem,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Stack,
  HStack,
} from "@chakra-ui/react";
import useProduct from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import ProductRating from "./ProductRating";
import { useState } from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data } = useProduct(id!);
  const [page, setPage] = useState(0);
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} paddingY={[5, 5, 10]}>
      <GridItem marginBottom={5}>
        <Image
          src={data?.images[page]}
          alignSelf={"center"}
          borderRadius={5}
          textAlign="center"
          boxSize="80%"
        />
        <HStack py={5} spacing={5}>
          {data?.images.map((image, index) => (
            <Image
              overflowX={"scroll"}
              cursor={"pointer"}
              key={index}
              onClick={() => setPage(index)}
              borderRadius={10}
              src={image}
              boxSize="90px"
            />
          ))}
        </HStack>
      </GridItem>

      <GridItem>
        <Heading>{data?.title}</Heading>
        <Text>{data?.description}</Text>
        <HStack justify={"space-between"} marginY="auto">
          <Stack spacing={3} py={10}>
            <Heading>${data?.price}</Heading>
            <Text>{"Discount Percentage " + data?.discountPercentage}</Text>
            <ProductRating rating={data?.rating!} />
          </Stack>
          <Stack spacing={3} p={10}>
            <Text>Stoke available: {data?.stock}</Text>
            <Text>Category: {data?.category}</Text>
          </Stack>
        </HStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default ProductDetailsPage;

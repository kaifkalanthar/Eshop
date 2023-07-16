import {
  Box,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Image,
  Spinner,
} from "@chakra-ui/react";
import NoOrders from "./NoOrders";
import { getDiscount } from "../product/ProductAttributes";
import useSavedProducts from "../../hooks/useSavedProducts";

const OrderedProducts = () => {
  const { data, isLoading } = useSavedProducts();
  if (isLoading) return <Spinner />;
  return (
    <Box width={["100%", "100%", "70%"]} mx={"auto"} padding={5}>
      <Heading
        fontSize={"3xl"}
        fontWeight={"medium"}
        textAlign={"center"}
        mb={5}
      >
        {" "}
        Your Orders
      </Heading>
      {!data?.orderedProducts ? (
        <NoOrders />
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={10}>
          {data?.orderedProducts?.map((product, index) => (
            <GridItem
              key={index}
              mx={"auto"}
              borderRadius={10}
              overflow={"hidden"}
            >
              <HStack w={["280px", "400px"]}>
                <Box boxSize={"100px"}>
                  <Image minHeight={"100px"} src={product.images[0]} />
                </Box>
                <Stack>
                  <Heading fontSize={"md"}>{product.title}</Heading>
                  <Heading fontSize="xl" fontWeight={"normal"}>
                    ${getDiscount(product.price, product.discountPercentage)}
                  </Heading>
                </Stack>
              </HStack>
            </GridItem>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default OrderedProducts;

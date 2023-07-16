import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import topRatingProducts from "../../data/topRatingProducts";
import ProductCard from "../products/ProductCard";
import ProductCardContainer from "../products/ProductCardContainer";

const TopProducts = () => {
  return (
    <Stack align="center">
      <Heading fontWeight="medium" textAlign="center" padding={10}>
        Top Rated Products
      </Heading>
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 5 }}
        spacing={[2, 10, 10]}
        marginBottom={5}
      >
        {topRatingProducts?.slice(0, 5).map((product) => (
          <ProductCardContainer key={product.id}>
            <ProductCard product={product} />
          </ProductCardContainer>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default TopProducts;

import { Heading, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import useTopProducts from "../hooks/useTopProducts";
import ProductCard from "./ProductCard";
import ProductCardContainer from "./ProductCardContainer";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const TopProducts = () => {
  const { topProducts, error, isLoading } = useTopProducts();
  if (error) return <Heading> UnExpected Error</Heading>;
  if (isLoading) return <Spinner marginX="auto" />;
  return (
    <Stack align="center">
      <Heading fontWeight="medium" textAlign="center" padding={10}>
        Top Rated Products
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} spacing={5}>
        {topProducts?.map((product) => (
          <ProductCardContainer key={product.id}>
            <ProductCard product={product} />
          </ProductCardContainer>
        ))}
      </SimpleGrid>
      <Link to="products">
        <CustomButton width="200px">See All</CustomButton>
      </Link>
    </Stack>
  );
};

export default TopProducts;

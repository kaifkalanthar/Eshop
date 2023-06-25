import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import productStore from "../store/ProductStore";
import CategorySelector from "./CategorySelector";
import CustomButton from "./CustomButton";
import ProductCard from "./ProductCard";
import ProductCardContainer from "./ProductCardContainer";
import ProductCardSkeleton from "./ProductCardSkeleton";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const { data, error } = useProducts();
  const { productQuery, setProductLimit } = productStore();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (!data)
    return (
      <SimpleGrid
        columns={{
          sm: 1,
          md: 4,
        }}
        spacing={5}
      >
        {skeletons.map((skeleton) => (
          <ProductCardSkeleton key={skeleton} />
        ))}
      </SimpleGrid>
    );
  if (error) return <Heading>Unexpected Error Occurred</Heading>;
  return (
    <>
      <Box>
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 4,
          }}
          spacing={5}
          marginBottom={5}
        >
          <SearchInput />
          <CategorySelector />
        </SimpleGrid>
        {data.products.length < 1 && <Heading>No Data Found</Heading>}
        <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={8}>
          {data?.products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductCardContainer>
                <ProductCard product={product} />
              </ProductCardContainer>
            </Link>
          ))}
        </SimpleGrid>

        {productQuery.limit >= 10 && productQuery.limit < 100 && (
          <Box textAlign="center" marginY={5}>
            <CustomButton
              handleOnclick={() => {
                productQuery.limit && setProductLimit(productQuery.limit + 10);
              }}
            >
              LoadMore
            </CustomButton>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProductSection;

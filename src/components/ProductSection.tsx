import React from "react";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import CategorySelector from "./CategorySelector";
import ProductCard from "./ProductCard";
import ProductCardContainer from "./ProductCardContainer";
import ProductCardSkeleton from "./ProductCardSkeleton";
import SearchInput from "./SearchInput";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductSection = () => {
  const { data, fetchNextPage, hasNextPage, error } = useProducts();
  const fetchDataCount =
    data?.pages.reduce((total, page) => total + page.products.length, 0) || 0;

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
        <InfiniteScroll
          dataLength={fetchDataCount}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<Spinner />}
          style={{ overflow: "hidden" }}
        >
          <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={[2, 10, 10]}>
            {data.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.products.map((product, index) => (
                  <ProductCardContainer key={index}>
                    <ProductCard product={product} />
                  </ProductCardContainer>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default ProductSection;

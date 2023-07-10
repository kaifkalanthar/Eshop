import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCardContainer from "./ProductCardContainer";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import ErrorPage from "./ErrorPage";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductGrid = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, error } = useProducts();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (isLoading)
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

  if (error) return <ErrorPage />;

  const fetchDataCount =
    data?.pages.reduce((total, page) => total + page.products.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchDataCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
      style={{ overflow: "hidden" }}
    >
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={[2, 10, 10]}>
        {data?.pages.map((page, index) => (
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
  );
};

export default ProductGrid;

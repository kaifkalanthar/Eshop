import { GridItem, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";

const ProductDetailsPageSkeleton = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} paddingY={[5, 5, 10]}>
      <GridItem marginX={"auto"}>
        <Skeleton width={["100%", "400px"]} height={["400px"]} />
      </GridItem>
      <GridItem>
        <Stack>
          <Skeleton height={5} />
          <Skeleton height={5} />
          <Skeleton height={5} width={"60%"} />
        </Stack>
      </GridItem>
    </SimpleGrid>
  );
};

export default ProductDetailsPageSkeleton;

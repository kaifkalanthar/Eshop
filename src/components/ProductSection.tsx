import { Box, SimpleGrid } from "@chakra-ui/react";
import CategorySelector from "./CategorySelector";
import ProductGrid from "./ProductGrid";
import SearchInput from "./SearchInput";

const ProductSection = () => {
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
        <ProductGrid />
      </Box>
    </>
  );
};

export default ProductSection;

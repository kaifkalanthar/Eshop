import { Box, Heading, Show, SimpleGrid } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import CategorySelector from "./CategorySelector";
import productStore from "../../store/ProductStore";

const ProductPageHeader = () => {
  const productQuery = productStore((s) => s.productQuery);
  return (
    <SimpleGrid
      mt={5}
      columns={{
        sm: 1,
        md: 2,
      }}
      spacing={5}
      mb={3}
    >
      <SearchInput />
      <Box marginY={"auto"}>
        <Show above="md">
          {productQuery.category && (
            <Heading
              fontSize={"lg"}
              fontWeight={"light"}
            >{`Category : ${productQuery.category}`}</Heading>
          )}
        </Show>
        {productQuery.searchQuery && (
          <Heading
            fontSize={"lg"}
            fontWeight={"light"}
          >{`SearchBy : ${productQuery.searchQuery}`}</Heading>
        )}
      </Box>
      <Show below="md">
        <CategorySelector />
      </Show>
    </SimpleGrid>
  );
};

export default ProductPageHeader;

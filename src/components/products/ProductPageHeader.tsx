import { Show, SimpleGrid } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import CategorySelector from "./CategorySelector";

const ProductPageHeader = () => {
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
      }}
      spacing={5}
      mb={3}
    >
      <SearchInput />
      <Show below="md">
        <CategorySelector />
      </Show>
    </SimpleGrid>
  );
};

export default ProductPageHeader;

import {
  Grid,
  GridItem,
  HStack,
  List,
  ListItem,
  Show,
  SimpleGrid,
  Image,
  Button,
} from "@chakra-ui/react";
import CategorySelector from "./CategorySelector";
import ProductGrid from "./ProductGrid";
import SearchInput from "./SearchInput";
import categories from "../data/categories";
import productStore from "../store/ProductStore";

const ProductSection = () => {
  const setCategory = productStore((s) => s.setCategory);
  return (
    <>
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
        <Show below="md">
          <CategorySelector />
        </Show>
      </SimpleGrid>
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
        gap={5}
      >
        <Show above="md">
          <GridItem area="aside" mx="auto">
            <List>
              {categories.map((category, index) => (
                <ListItem mb={2} key={index}>
                  <HStack spacing={5}>
                    <Image
                      src={category.img}
                      boxSize={"40px"}
                      borderRadius={5}
                    />
                    <Button
                      fontSize="lg"
                      whiteSpace="normal"
                      textAlign="left"
                      variant={"link"}
                      onClick={() => setCategory(category.name)}
                    >
                      {category.name}
                    </Button>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </GridItem>
        </Show>
        <GridItem area="main">
          <ProductGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default ProductSection;

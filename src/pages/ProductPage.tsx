import { Grid, GridItem, Show } from "@chakra-ui/react";
import ProductGrid from "../components/products/ProductGrid";
import ProductPageHeader from "../components/products/ProductPageHeader";
import ProductSideBar from "../components/products/ProductSideBar";

const ProductSection = () => {
  document.title = "TrendiFy | Product";
  return (
    <>
      <ProductPageHeader />
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          md: `'nav nav' 'aside main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        templateColumns={{
          base: "1fr",
          md: "250px 1fr",
          lg: "250px 1fr",
        }}
        gap={5}
      >
        <Show above="md">
          <GridItem area="aside" mx="auto">
            <ProductSideBar />
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

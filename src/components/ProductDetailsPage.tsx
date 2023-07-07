import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import CartButton from "./CartButton";
import CheckoutButton from "./CheckoutButton";
import ImageStack from "./ImageStack";
import ProductAttributes from "./ProductAttributes";
import ProductDetailsPageSkeleton from "./ProductDetailsPageSkeleton";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useProduct(id!);
  if (isLoading) return <ProductDetailsPageSkeleton />;
  if (!data) return;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} paddingY={[5, 5, 10]}>
      <GridItem marginBottom={5}>
        <ImageStack data={data} />
      </GridItem>

      <GridItem>
        <ProductAttributes data={data} />
        <Box marginX="auto" width="80%">
          <Box mb={5}>
            <CartButton product={data} />
          </Box>
          <CheckoutButton label="Buy Now" data={[data]} />
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default ProductDetailsPage;

import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import CheckoutButton from "./CheckoutButton";
import CustomButton from "./CustomButton";
import ImageStack from "./ImageStack";
import ProductAttributes from "./ProductAttributes";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data } = useProduct(id!);

  if (!data) return;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5} paddingY={[5, 5, 10]}>
      <GridItem marginBottom={5}>
        <ImageStack data={data} />
      </GridItem>

      <GridItem>
        <ProductAttributes data={data} />
        <Box marginX="auto" width="80%">
          <CustomButton width="100%" bg={"transparent"} margin={5}>
            Add to Cart
          </CustomButton>
          <CheckoutButton label="Buy Now" data={[data]} />
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default ProductDetailsPage;

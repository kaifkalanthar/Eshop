import { SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardContainer from "./ProductCardContainer";

const ProductSection = () => {
  const { data } = useProducts();
  console.log(data);
  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={5}>
        {data?.products.map((product) => (
          <ProductCardContainer key={product.id}>
            <ProductCard product={product} />
          </ProductCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductSection;

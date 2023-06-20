import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const ProductCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default ProductCardContainer;

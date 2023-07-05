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
      width={["auto"]}
      height={"auto"}
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default ProductCardContainer;

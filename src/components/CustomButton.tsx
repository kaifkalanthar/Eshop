import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  children: ReactNode | ReactNode[];
  width?: any;
}

const CustomButton = ({ children, width }: Props) => {
  const navigate = useNavigate();
  return (
    <Button
      width={width ? width : 150}
      bg="pink.200"
      transition="ease-in 0.1s"
      _hover={{ bg: "pink.400" }}
      color="black"
      onClick={() => navigate("products")}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

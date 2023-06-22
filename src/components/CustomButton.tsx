import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  handleOnclick?: () => void;
  width?: any;
}

const CustomButton = ({ children, handleOnclick, width }: Props) => {
  return (
    <Button
      width={width ? width : 150}
      bg="pink.200"
      transition="ease-in 0.1s"
      _hover={{ bg: "pink.400" }}
      color="black"
      onClick={handleOnclick}
      type="submit"
    >
      {children}
    </Button>
  );
};

export default CustomButton;

import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  handleOnclick?: () => void;
  width?: any;
  valid?: boolean;
}

const CustomButton = ({ children, handleOnclick, width, valid }: Props) => {
  return (
    <Button
      width={width ? width : 150}
      bg="pink.200"
      transition="ease-in 0.1s"
      _hover={{ bg: "pink.400" }}
      color="black"
      onClick={handleOnclick}
      type="submit"
      isDisabled={valid}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

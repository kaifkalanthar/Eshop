import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  handleOnclick?: () => void;
  width?: any;
  bg?: any;
  margin?: any;
  valid?: boolean;
  size?: string;
}

const CustomButton = ({
  children,
  handleOnclick,
  width,
  bg,
  margin,
  valid,
}: Props) => {
  return (
    <Button
      width={width ? width : 150}
      bg={bg ? "bg" : "pink.100"}
      border={bg ? "1px solid #a0a0a0" : ""}
      transition="ease-in 0.1s"
      _hover={{ bg: "pink.400" }}
      color="black"
      onClick={handleOnclick}
      type="submit"
      isDisabled={valid}
      marginBottom={margin ? margin : ""}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

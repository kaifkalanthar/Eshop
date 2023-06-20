import { HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const MenuItemContainer = ({ children }: Props) => {
  return (
    <HStack
      bgColor="pink.200"
      _hover={{ bg: "pink.400" }}
      borderRadius={5}
      width="250px"
      display="flex"
      justify="center"
      padding="5px 10px"
      transition="ease 0.5s"
      color="black"
    >
      {children}
    </HStack>
  );
};

export default MenuItemContainer;

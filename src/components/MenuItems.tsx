import { Badge, Box, HStack, Icon, Show, useColorMode } from "@chakra-ui/react";
import { AiOutlineBank, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import ColorModeChange from "./button/ColorModeChange";

const MenuItems = () => {
  const user = userStore((s) => s.user);
  const checkoutItems = CheckoutStore((s) => s.checkoutItems);
  const { colorMode } = useColorMode();
  return (
    <HStack
      spacing={["60px", 10]}
      align="center"
      justify={"space-between"}
      mb={0}
    >
      <Box my={"auto"} boxSize={"35px"}>
        <Link to="/">
          <Icon as={AiOutlineHome} boxSize={"100%"} />
        </Link>
      </Box>
      <Box my={"auto"} boxSize={"35px"}>
        <Link to="/products">
          <Icon as={AiOutlineBank} boxSize={"100%"} />
        </Link>
      </Box>
      <Box my={"auto"} boxSize={"35px"}>
        <Link to={user.uid ? "/cart" : "/login"}>
          <Icon as={HiOutlineShoppingBag} boxSize={"100%"} />
          <Badge
            position="relative"
            display={checkoutItems && checkoutItems.length ? "block" : "none"}
            transform="translate(35%, -120%)"
            textAlign={"center"}
            borderRadius="full"
            bg={"none"}
            //bg={colorMode === "light" ? "black" : "gray.100"}
            color={colorMode === "light" ? "black" : "white"}
            width={"20px"}
            py={1}
            fontSize="xs"
          >
            {checkoutItems ? checkoutItems.length : ""}
          </Badge>
        </Link>
      </Box>

      <Box my={"auto"} boxSize={"35px"}>
        <Link to={user.uid ? "/profile" : "/login"}>
          <Icon as={AiOutlineUser} boxSize={"100%"} />
        </Link>
      </Box>
      <Show above="md">
        <ColorModeChange />
      </Show>
    </HStack>
  );
};

export default MenuItems;

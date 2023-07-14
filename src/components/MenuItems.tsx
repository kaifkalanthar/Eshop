import { Badge, Box, HStack, Icon, Show } from "@chakra-ui/react";
import { AiOutlineBank, AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import ColorModeChange from "./ColorModeChange";

const MenuItems = () => {
  const user = userStore((s) => s.user);
  const checkoutItems = CheckoutStore((s) => s.checkoutItems);
  return (
    <HStack spacing={["60px", 10]} align="center" justify={"space-between"}>
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
            transform="translate(100%, -200%)"
            bg="red"
            color="white"
            borderRadius="full"
            px={2}
            py={1}
            fontSize="xs"
          >
            {checkoutItems.length}
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

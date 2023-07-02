import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import CheckoutStore from "../store/CheckoutStore";
import userStore from "../store/UserStore";
import ColorModeChange from "./ColorModeChange";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  const user = userStore((s) => s.user);
  const cartItems = CheckoutStore((s) => s.checkoutItems);
  const navigate = useNavigate();

  return (
    <HStack padding={5} display="flex" justify="space-between">
      <HStack overflow="hidden" spacing={2}>
        <Link to="/">
          <Image src={logo} borderRadius={5} boxSize="60px" objectFit="cover" />
        </Link>
        <Heading size="xl" fontFamily="cursive" fontWeight="thin">
          Eshop
        </Heading>
      </HStack>
      <HStack spacing={5}>
        <Show above="sm">
          <Link to={user.uid ? "/cart" : "/login"}>
            <Stack>
              <Box
                bg="red"
                display={cartItems.length === 0 ? "none" : "block"}
                borderRadius={50}
                width={6}
                marginBottom={-8}
                marginLeft={7}
                zIndex={999}
              >
                <Text size="10px" textAlign="center">
                  {cartItems.length}
                </Text>
              </Box>
              <Icon as={TbShoppingBag} boxSize="40px" />
            </Stack>
          </Link>
          <Button
            height="45px"
            onClick={() =>
              user.displayName ? navigate("profile") : navigate("login")
            }
          >
            <Icon as={MdOutlineAccountCircle} boxSize="40px" />
          </Button>
          {user.displayName && (
            <Button
              height="45px"
              name="logout"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/";
              }}
            >
              <Icon as={IoIosLogOut} boxSize="40px" />
            </Button>
          )}
          <ColorModeChange />
        </Show>
        <Show below="sm">
          <SideNavbar />
        </Show>
      </HStack>
    </HStack>
  );
};

export default Navbar;

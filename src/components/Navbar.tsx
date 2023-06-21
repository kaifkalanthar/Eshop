import {
  HStack,
  Image,
  Heading,
  Show,
  Icon,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import logo from "../assets/logo.jpg";
import SideNavbar from "./SideNavbar";
import ColorModeChange from "./ColorModeChange";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Stack>
            <Box
              bg="red"
              borderRadius={50}
              width={6}
              marginBottom={-8}
              marginLeft={7}
              zIndex={999}
            >
              <Text size="10px" textAlign="center">
                1
              </Text>
            </Box>
            <Icon as={TbShoppingBag} boxSize="40px" />
          </Stack>
          <Icon as={MdOutlineAccountCircle} boxSize="40px" />

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

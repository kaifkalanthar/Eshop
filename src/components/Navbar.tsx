import { HStack, Image, Heading, Show, Icon } from "@chakra-ui/react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import logo from "../assets/logo.jpg";
import SideNavbar from "./SideNavbar";
import ColorModeChange from "./ColorModeChange";

const Navbar = () => {
  return (
    <HStack padding={5} display="flex" justify="space-between">
      <HStack overflow="hidden" spacing={2}>
        <Image src={logo} borderRadius={5} boxSize="60px" objectFit="cover" />
        <Heading size="xl" fontFamily="cursive" fontWeight="thin">
          Eshop
        </Heading>
      </HStack>
      <HStack spacing={5}>
        <Show above="md">
          <Icon as={MdOutlineAccountCircle} boxSize="40px" />
          <Icon as={TbShoppingBag} boxSize="40px" />
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

import { HStack, Image, Show, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";
import logo from "../assets/logo.jpg";
import MenuItems from "./MenuItems";
import useSavedProducts from "../hooks/useSavedProducts";
import ColorModeChange from "./button/ColorModeChange";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { colorMode } = useColorMode();
  const { y: scrollY } = useWindowScroll();

  useSavedProducts(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <HStack
      padding={5}
      zIndex={999}
      display="flex"
      height={"90px"}
      justify="space-between"
      position={["relative", "sticky"]}
      top={0}
      bg={
        isScrolled
          ? colorMode === "light"
            ? "pink.100"
            : "#332f31"
          : "transparent"
      }
      transition="background-color 0.5s"
    >
      <HStack overflow="hidden" spacing={2}>
        <Link to="/">
          <Image src={logo} borderRadius={5} boxSize="60px" objectFit="cover" />
        </Link>
      </HStack>
      <Show above="md">
        <MenuItems />
      </Show>
      <Show below="sm">
        <ColorModeChange />
      </Show>
    </HStack>
  );
};

export default Navbar;

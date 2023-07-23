import { Box, Show, Spinner, Stack, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";
import Navbar from "./components/Navbar";
import useSavedProducts from "./hooks/useSavedProducts";
import CheckoutStore from "./store/CheckoutStore";
import userStore from "./store/UserStore";

const Layout = () => {
  const setUser = userStore((s) => s.setUser);
  const getStoredData = localStorage.getItem("user");
  const setCheckoutItems = CheckoutStore((s) => s.setCheckoutItems);
  const checkoutItems = CheckoutStore((s) => s.checkoutItems);
  const { data, isLoading } = useSavedProducts(true);
  useEffect(() => {
    if (getStoredData) {
      const user = JSON.parse(getStoredData);
      setUser(user);
    }
    if (data) {
      setCheckoutItems(data?.cart);
    }
  }, [data, getStoredData, checkoutItems, setUser]);
  const { colorMode } = useColorMode();
  if (isLoading)
    return (
      <Stack width={"100%"} height={"100vh"}>
        <Box m={"auto"}>
          <Spinner size={"xl"} />
        </Box>
      </Stack>
    );
  return (
    <>
      <Navbar />
      <Box paddingX={5}>
        <Outlet />
      </Box>

      <Footer />

      <Show below="md">
        <Stack
          height={"100%"}
          position={["sticky", "sticky", "relative"]}
          bottom={[0, 0, "auto"]}
          alignItems={"center"}
          py={4}
          bg={colorMode === "light" ? "pink.300" : "#332f31"}
        >
          <MenuItems />
        </Stack>
      </Show>
    </>
  );
};

export default Layout;

import { Box, Show, Spinner, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import userStore from "./store/UserStore";
import CheckoutStore from "./store/CheckoutStore";
import useSavedProducts from "./hooks/useSavedProducts";
import MenuItems from "./components/MenuItems";

const Layout = () => {
  const setUser = userStore((s) => s.setUser);
  const getStoredData = localStorage.getItem("user");
  const setCheckoutItems = CheckoutStore((s) => s.setCheckoutItems);
  const { data, isLoading } = useSavedProducts();

  useEffect(() => {
    if (getStoredData) {
      const user = JSON.parse(getStoredData);
      setUser(user);
    }
    if (data?.userId && data?.cart) {
      setCheckoutItems(data?.cart);
    }
  }, [data, getStoredData, setCheckoutItems, setUser]);
  if (isLoading) return <Spinner />;
  return (
    <>
      <Navbar />
      <Box paddingX={5}>
        <Outlet />
      </Box>

      <Footer />

      <Show below="md">
        <Stack
          position={["sticky", "relative"]}
          bottom={[0, "auto"]}
          alignItems={"center"}
          py={4}
          bg="pink.100"
        >
          <MenuItems />
        </Stack>
      </Show>
    </>
  );
};

export default Layout;

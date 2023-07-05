import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import userStore from "../store/UserStore";
import CheckoutStore from "../store/CheckoutStore";
import useSavedProducts from "../hooks/useSavedProducts";

const Layout = () => {
  const setUser = userStore((s) => s.setUser);
  const getStoredData = localStorage.getItem("user");
  const setCheckoutItems = CheckoutStore((s) => s.setCheckoutItems);
  const { data } = useSavedProducts();

  useEffect(() => {
    if (getStoredData) {
      const user = JSON.parse(getStoredData);
      setUser(user);
    }
    if (data?.cart) {
      setCheckoutItems(data?.cart);
    }
  }, [data, getStoredData]);

  return (
    <>
      <Navbar />
      <Box paddingX={5}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;

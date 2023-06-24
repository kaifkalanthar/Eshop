import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import userStore from "../store/UserStore";
import { useEffect } from "react";

const Layout = () => {
  const setUser = userStore((s) => s.setUser);
  useEffect(() => {
    const getStoredData = localStorage.getItem("user");
    if (getStoredData) {
      const user = JSON.parse(getStoredData);
      setUser(user);
    }
  });

  return (
    <>
      <Navbar />
      <Box paddingX={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

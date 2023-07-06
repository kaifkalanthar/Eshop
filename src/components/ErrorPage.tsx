import { Box, Heading, Image } from "@chakra-ui/react";
import pageNotFound from "../assets/pageNotFound.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Heading textAlign={"center"} fontWeight={"thin"}>
          Page Not Found
        </Heading>
        <Image mx={"auto"} width={["100%", "70%", "30%"]} src={pageNotFound} />
      </Box>
      <Footer />
    </>
  );
};

export default ErrorPage;

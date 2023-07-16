import { Flex, Box, Text, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box as="footer" borderTop="1px solid gary.400" marginBottom={10} py={4}>
      <Divider marginBottom={10} />
      <Flex
        justifyContent="center"
        direction={{ base: "column", md: "row", lg: "row" }}
        alignItems="center"
      >
        <Text>© 2023 Eshop. All rights reserved.</Text>
        <Text mx={2}>|</Text>
        <Link to="#">Privacy Policy</Link>
        <Text mx={2}>|</Text>
        <Link to="#">Terms of Service</Link>
      </Flex>
    </Box>
  );
};

export default Footer;

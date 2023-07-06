import { Box, Heading, Image } from "@chakra-ui/react";
import noItemsInCart from "../assets/NoCart.svg";

const NoItems = () => {
  return (
    <>
      <Box>
        <Image
          width={["200px", "280px", "300px"]}
          mx="auto"
          src={noItemsInCart}
        />
        <Heading textAlign={"center"} fontSize={"lg"} fontWeight={"normal"}>
          Your Cart Is Empty
        </Heading>
      </Box>
    </>
  );
};

export default NoItems;

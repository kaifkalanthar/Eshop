import { Box, Heading, Image } from "@chakra-ui/react";
import noOrders from "../../assets/NoOrders.svg";

const NoOrders = () => {
  return (
    <Box>
      <Image width={["200px", "280px", "300px"]} mx="auto" src={noOrders} />
      <Heading textAlign={"center"} fontSize={"lg"} fontWeight={"normal"}>
        No orders Placed
      </Heading>
    </Box>
  );
};

export default NoOrders;

import {
  Avatar,
  Box,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import useSavedProducts from "../hooks/useSavedProducts";
import userStore from "../store/UserStore";
import { getDiscount } from "./ProductAttributes";

const UserProfile = () => {
  const user = userStore((s) => s.user);
  const { data, isLoading } = useSavedProducts();
  if (isLoading) return <Spinner />;
  const orderedProducts = data?.orderedProducts;

  return (
    <Stack marginX={"auto"} spacing={5}>
      <Box textAlign={"center"}>
        <Avatar name={user.displayName!} size={"2xl"} />
        <Heading fontSize={"3xl"}>{user.displayName}</Heading>
      </Box>
      <Box width={["100%", "100%", "70%"]} marginX={"auto"} padding={5}>
        <Heading
          fontSize={"3xl"}
          fontWeight={"medium"}
          textAlign={"center"}
          marginBottom={5}
        >
          {" "}
          Your Orders
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={10}>
          {orderedProducts?.map((product, index) => (
            <GridItem key={index} marginX={"auto"}>
              <HStack width={["280px", "400px"]}>
                <Box boxSize={"100px"}>
                  <Image minHeight={"100px"} src={product.images[0]} />
                </Box>
                <Stack>
                  <Heading fontSize={"md"}>{product.title}</Heading>
                  <Heading fontSize="xl" fontWeight={"normal"}>
                    ${getDiscount(product.price, product.discountPercentage)}
                  </Heading>
                </Stack>
              </HStack>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default UserProfile;

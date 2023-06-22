import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { MdOutlineAccountCircle } from "react-icons/md";
import MenuItemContainer from "./MenuItemContainer";
import { TbShoppingBag } from "react-icons/tb";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <Stack spacing={5} align="end">
      <Flex direction="column" gap={5}>
        <MenuItemContainer>
          <Icon as={TbShoppingBag} boxSize="40px" />
          <Box
            bg="red"
            borderRadius={50}
            width={6}
            marginLeft={-5}
            marginTop={-2}
            zIndex={999}
          >
            <Text size="10px" textAlign="center">
              1
            </Text>
          </Box>
          <Heading size="lg">Cart</Heading>
        </MenuItemContainer>
        <Link to="login">
          <MenuItemContainer>
            <Icon as={MdOutlineAccountCircle} boxSize="40px" />
            <Heading size="lg">Account</Heading>
          </MenuItemContainer>
        </Link>
      </Flex>
    </Stack>
  );
};

export default MenuItems;

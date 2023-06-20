import {
  useDisclosure,
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Icon,
} from "@chakra-ui/react";
import { RiMenu3Fill } from "react-icons/ri";
import MenuItems from "./MenuItems";
import ColorModeChange from "./ColorModeChange";
const SideNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Button onClick={onOpen} bg="transparent">
          <Icon as={RiMenu3Fill} boxSize="40px" />
        </Button>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <Box marginBottom={10}>
            <DrawerHeader textAlign="center">
              <ColorModeChange /> Dark Mode
            </DrawerHeader>
          </Box>
          <DrawerBody>
            <MenuItems />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideNavbar;

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenu3Fill } from "react-icons/ri";
import ColorModeChange from "./ColorModeChange";
import MenuItems from "./MenuItems";
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
              <ColorModeChange /> Light Mode
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

import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeChange = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      width="40px"
      colorScheme="pink"
      isChecked={colorMode === "light"}
      onChange={toggleColorMode}
    />
  );
};

export default ColorModeChange;

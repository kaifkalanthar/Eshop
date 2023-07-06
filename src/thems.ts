import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  fonts: {
    body: "poppins, sans-serif",
    heading: "poppins, sans-serif",
  },
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    pink: {
      400: "#F2BED1",
      300: "#FDCEDF",
      200: "#F8E8EE",
      100: "#F9F5F6",
    },
  },
});

export default theme;

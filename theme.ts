import { extendTheme } from "@chakra-ui/react";

// Here you can add custom colors
const colors = {};

const fonts = {
  heading: "Archivo, sans-serif",
  body: "Archivo, sans-serif",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export default extendTheme({
  colors,
  fonts,
  config,
});

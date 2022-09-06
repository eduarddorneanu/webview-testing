import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig } from "wagmi";
import theme from "../theme";
import { wagmiClient } from "../utils/config";

export const GlobalProvider: React.FC = ({ children }) => (
  <WagmiConfig client={wagmiClient}>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </WagmiConfig>
);

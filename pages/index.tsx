import { Button, Center, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useAccount, useDisconnect } from "wagmi";
import Layout from "../components/Layout";
import WalletModal from "../components/modals/WalletModal";

const IndexPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <Layout title="Next.js Chakra Template">
      <WalletModal isOpen={isOpen} onClose={onClose} />
      <Center pt="20">
        {isConnected ? (
          <VStack>
            <Button
              onClick={() => {
                disconnect();
              }}
            >
              Disconnect
            </Button>
            <Text>Connected with {address}</Text>
          </VStack>
        ) : (
          <Button onClick={onOpen}>Connect to wallet</Button>
        )}
      </Center>
    </Layout>
  );
};

export default IndexPage;

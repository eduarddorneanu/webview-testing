import { CoinbaseWalletConnector } from "@wagmi/core/connectors/coinbaseWallet";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { chain, configureChains, createClient, defaultChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";

export const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID as string;
export const infuraId = process.env.NEXT_PUBLIC_INFURA_ID as string;
export const defaultChain = chain.polygonMumbai;

const { provider, chains } = configureChains(
  [defaultChain, ...defaultChains],
  [alchemyProvider({ apiKey: alchemyId })]
);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        shimChainChangedDisconnect: false,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "nftgco",
        jsonRpcUrl:
          "https://mainnet.infura.io/v3/e1dce6fb2906486cb2076edbf016ea64",
      },
    }),
  ],
  provider,
});

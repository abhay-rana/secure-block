import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from "reducers/index";
import "./styles/global.css";
import App from "./App";
import { configureChains, createClient, WagmiConfig, mainnet } from "wagmi";
import { publicProvider } from 'wagmi/providers/public';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { alchemyProvider } from 'wagmi/providers/alchemy';
import {polygon} from 'wagmi/chains';




const { chains, provider, webSocketProvider } = configureChains(
	[mainnet],
	[publicProvider()],
  )
   
  const client = createClient({
	autoConnect: true,
	provider,
	webSocketProvider,
  })



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<WagmiConfig client={client}>
			<App />
		</WagmiConfig>
	</Provider>
);

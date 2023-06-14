import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
	interface Window {
		ethereum?: MetaMaskInpageProvider;
	}
	interface Web3Props {
		provider: ethers.BrowserProvider.JsonRpcProvider;
		signer: ethers.BrowserProvider.JsonRpcSigner;
		account: string;
		chainId: bigint;
	}
}

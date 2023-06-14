<script lang="ts">
	import { ethers } from 'ethers';
	export let web3Props: Web3Props;

	async function connectWallet() {
		/**
		 * @description `Web3Provider` is now called `BrowserProvider` (v5 --> v6)
		 * @link https://docs.ethers.org/v6/migrating/
		 */
		let provider = new ethers.BrowserProvider(window.ethereum, 'any');
		await provider.send('eth_requestAccounts', []);
		const signer = await provider.getSigner();
		const account = await signer.getAddress();
		const network = await provider.getNetwork();
		const chainID = network.chainId;
	}
</script>

<button class="btn" on:click={connectWallet}>Attach Wallet</button>

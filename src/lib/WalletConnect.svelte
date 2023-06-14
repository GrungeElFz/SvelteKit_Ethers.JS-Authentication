<script lang="ts">
	import { ethers } from 'ethers';

	async function connectWallet() {
		/**
		 * @description `Web3Provider` is now called `BrowserProvider` (v5 --> v6)
		 * @link https://docs.ethers.org/v6/migrating/
		 */
		let provider = new ethers.BrowserProvider(window.ethereum, 'any');
		await provider.send('eth_requestAccounts', []);
		const signer = await provider.getSigner();
		const account = await signer.getAddress();
		const chainID = await signer.getChainId();
	}
</script>

<button class="btn">Attach Wallet</button>

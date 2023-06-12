<script lang="ts">
	import { ethers } from 'ethers';

	async function connectWallet() {
		let provider = new ethers.BrowserProvider(window.ethereum, 'any');
		await provider.send('eth_requestAccounts', []);
		const signer = provider.getSinger();
		const account = await signer.getAddress();
		const chainID = await signer.getChainId();
	}
</script>

<button class="btn">Attach Wallet</button>

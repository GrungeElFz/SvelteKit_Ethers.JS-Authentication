<script lang="ts">
	import WalletConnect from '$lib/WalletConnect.svelte';

	export let web3Props: Web3Props;
</script>

<WalletConnect bind:web3Props />

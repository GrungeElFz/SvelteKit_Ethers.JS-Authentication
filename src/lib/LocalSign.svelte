<script lang="ts">
	import { ethers } from 'ethers';
	import { fly } from 'svelte/transition';

	export let web3Props: Web3Props;

	$: nonce = Math.floor(Math.random() * 1000000);
	$: signature = '';
	$: address = '';
	$: signed = false;

	let valid: boolean | null = null;
	let expectedAddress: string;

	const notYourAddr = '0x0000000000000000000000000000000000000000';

	async function sign() {
		nonce = Math.floor(Math.random() * 1000000);
		signature = await web3Props.signer.signMessage(`Signing one-time nonce: ${nonce}`);
		signed = true;
	}
	function verify() {
		address = ethers.verifyMessage(`Signing one-time nonce: ${nonce}`, signature);
		valid = address === expectedAddress;
	}
	async function reset() {
		nonce = Math.floor(Math.random() * 1000000);
		signature = '';
		valid = null;
		address = '';
		web3Props.account = await web3Props.signer.getAddress();
		signed = false;
	}
</script>

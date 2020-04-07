<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import * as polyfill from 'credential-handler-polyfill';
	import axios from 'axios';

	import Select, {Option} from '@smui/select';
	import Textfield from '@smui/textfield';
	import '@smui/select.css';
	import '@smui/textfield.css';

	import Snackbar from './components/Snackbar.svelte';

	import { 
		getCredentialQuery, 
		getVerifiablePresentation, 
		getOptions 
	} from './helpers';

	import { credentialOptions } from './options/credentialOptions';
	import { issuerOptions } from './options/issuerOptions';
	import { verifierOptions } from './options/verifierOptions';

	import { ISSUER_MESSAGE, VERIFIER_MESSAGE } from './consts';


	const 
		logoSrc = './assets/images/mavennet_logo.png',
		apiUrl = process.env.API_URL;

	let	
		selectedTab = 0,
		vcChoice,
		issuer,
		polyfillInstance = null,
		isLoading = false,
		selectedVerifier,
		isSnackbarShowing = false,
		snackbarMessage,
		hasSnackBarError;


	onMount(async () => {
		try {
			polyfillInstance = await polyfill.loadOnce();
			console.log('Ready to work with credentials!');
    } catch (e) {
      console.log('Error in Chapi LoadOnce', e);
		}
	});

	function showSnackbar(hasError, message) {
		isSnackbarShowing = true;
		hasSnackBarError = hasError;
		snackbarMessage = message;
	}

	async function handleIssueVc() {
		const credential = credentialOptions.find(vc => vc.id === parseInt(vcChoice)).value;
		const options = getOptions(issuer, 'assertionMethod', 'did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd');

		try {
			isLoading = true;
			const { data } = await axios.post('https://api.neo-flow.com/credentials/issueCredential', { credential, options } );

			const vp = getVerifiablePresentation(data);

			const webCredential = new polyfillInstance.WebCredential(vp.type, vp);
			const result = await polyfillInstance.credentials.store(webCredential);

			if(!result) {
      	throw new Error('Store credential operation did not succeed');
			}
			
			showSnackbar(false, ISSUER_MESSAGE.SUCCESS);
		} catch(err) {
			console.log('Error issuing and storing VC', err);
			showSnackbar(true, ISSUER_MESSAGE.ERROR);
		} finally {
			isLoading = false;
		}
	}

	async function handleVerifyVc() {
		const type = credentialOptions.find(vc => vc.id === parseInt(vcChoice)).label;
		const apiUrl = verifierOptions.find(verifier => verifier.id === parseInt(selectedVerifier)).url;
		const credentialQuery = getCredentialQuery(type);

		try {
			isLoading = true;
			const webCredential = await navigator.credentials.get(credentialQuery);
			if(!webCredential) {
      	throw new Error('Get credential operation did not succeed');
			}
			const { data } = await axios.post(apiUrl, { verifiableCredential: webCredential.data.verifiableCredential });

			
			showSnackbar(false, VERIFIER_MESSAGE.SUCCESS);
		} catch(err) {
			console.log('Error getting and verifying VC', err);
			showSnackbar(true, VERIFIER_MESSAGE.ERROR);
		} finally {
			isLoading = false;
		}
	}

	function selectTab(value) {
		selectedVerifier = null;
		issuer = null;
		vcChoice = null;
		selectedTab = value;
	}

	function selectVerifier(id) {
		selectedVerifier = id;
	}

	function setDisplaySnackBar(value) {
		isSnackbarShowing = value;
	}
</script>


<div class="wrapper">
	<Snackbar 
		text={snackbarMessage} 
		display={isSnackbarShowing} 
		onHide={() => isSnackbarShowing = false}
		error={hasSnackBarError}></Snackbar>
	<main class="page-content">
		<img class="logo" src={logoSrc} alt="Mavennet Logo">

		<section class="card">
			<header class="card__header">
				<nav class="header__nav">
					<button 
						class="nav__item" 
						class:nav__item--active="{selectedTab === 0}"
						on:click|preventDefault={() => selectTab(0) }
						>Issuer
					</button>
					<button
						class="nav__item" 
						class:nav__item--active="{selectedTab === 1}"
						on:click={() => selectTab(1)}
						>Verifier
					</button>
				</nav>
			</header>
			<div class="card__content">
				{#if selectedTab === 0}
					<div class="content" in:fly="{{ x: -200, duration: 700 }}">
						<h1 class="content__title">Add To Wallet</h1>
						<Select enhanced variant="outlined" bind:value={vcChoice} label="Type" class="content__input">
							{#each credentialOptions as credential}
								<Option value={credential.id} selected={vcChoice === credential.id}>{credential.label}</Option>
							{/each}
						</Select>
						<Select enhanced variant="outlined" bind:value={issuer} label="Issuer*" class="content__input">
							{#each issuerOptions as issuerItem}
								<Option value={issuerItem} selected={issuerItem === issuer}>{issuerItem}</Option>
							{/each}
						</Select>
						<button class="content__submit" on:click={handleIssueVc}>
							RECEIVE
						</button>
					</div>
				{:else if selectedTab === 1}
					<div class="content" in:fly="{{ x: 200, duration: 700 }}">
						<h1 class="content__title">Verify From Wallet</h1>
						<Select enhanced variant="outlined" bind:value={vcChoice} label="Type" class="content__input">
							{#each credentialOptions as credential}
								<Option value={credential.id} selected={vcChoice === credential.id}>{credential.label}</Option>
							{/each}
						</Select>

						<div class="content__verifiers">
							<h2 class="verifiers__title">Select a verifier</h2>
							<ul class="verifiers__list">
								{#each verifierOptions as verifier}
									<li class="list__item">
										<img 
											class="item__logo" 
											src={`./assets/images/${verifier.src}`} 
											alt={verifier.alt}
											class:item__logo--active="{selectedVerifier === verifier.id}"
											on:click={() => selectVerifier(verifier.id)}>
									</li>
								{/each}
							</ul>
						</div>
						<button class="content__submit" on:click={handleVerifyVc}>
							VERIFY
						</button>
					</div>
				{/if}
			</div>
		</section>
	</main>
</div>


<style>
	.wrapper {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		box-sizing: content-box;
	}

	.page-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		margin-top: -128px;
	}

	.logo {
		margin-bottom: 62px;
	}

	.card {
		--clr-background: var(--pallete-white);
		--clr-tab--active: var(--pallete-white);
		--clr-tab--inactive: var(--pallete-selago);
		--clr-text--main: var(--pallete-haiti);
		--clr-text--inactive: var(--pallete-dusty-grey);
		--clr-button-background: var(--pallete-medium-purple);
		--clr-button-text: var(--pallete-white);
		--clr-button-selected-verifier: var(--pallete-medium-purple);

		font-family: 'Roboto', sans-serif;

		height: 419px;
		width: 480px;
		border-radius: 5px 5px 0 0;
		background-color: var(--clr-background);
	}

	.header__nav {
		display: flex;
	}

	.nav__item {
		color: var(--clr-text--inactive);
  	font-size: 20px;
  	letter-spacing: 0;
		line-height: 24px;
		
		padding: .9em 0;
		background-color: var(--clr-tab--inactive);
		width: 50%;
		
		cursor: pointer;

		transition: all 200ms ease-in-out;
	}

	.nav__item:nth-child(1) {
		border-radius: 5px 0 0 0;
	}

	.nav__item:nth-child(2) {
		border-radius: 0 5px 0 0;
	}

	.nav__item--active {
		color: var(--clr-text--main);
		background-color: var(--clr-background);
	}

	.card__content {
		overflow: hidden;

		padding: 40px 58px 48px 62px;
	}

	.content__title {
		font-size: 24px;
		font-weight: 500;
		letter-spacing: 0;
		line-height: 28px;

		margin-bottom: 1.25em;
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	* :global(select, .content__input) {
		margin-bottom: 31px;
	}

	* :global(select, .mdc-select__selected-text) {
		display: inline-block !important;
		white-space: nowrap !important;
		overflow: hidden !important;
		text-overflow: ellipsis !important;
	}

	.content__verifiers {
		margin-bottom: 20px;
	}

	.verifiers__title {
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 0;
		line-height: 28px;

		margin-bottom: .4em;
	}

	.verifiers__list {
		list-style: none;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.list__item {
		margin: 0 10px;
	}

	.list__item:first-child {
		margin-left: 0;
	}

	.list__item:last-child {
		margin-right: 0;
	}


	.item__logo {
		box-sizing: content-box;
		width: 30px;
		cursor: pointer;
		padding: 4px;
		border: 2px solid transparent;
		border-radius: 10px;
		-webkit-box-shadow: 0px 2px 26px -10px rgba(0,0,0,0.75);
		-moz-box-shadow: 0px 2px 26px -10px rgba(0,0,0,0.75);
		box-shadow: 0px 2px 26px -10px rgba(0,0,0,0.75);
	}
	
	.item__logo--active {
		border: 2px solid var(--clr-button-selected-verifier);
	}

	.content__submit {
		color: var(--clr-button-text);
		font-family: 'Barlow', sans-serif;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: 0;
		line-height: 20px;
		text-align: center;

		background-color: var(--clr-button-background);
		padding: 0.9375em 1.875em;
		border-radius: 3px;
		margin-top: 7px;
		cursor: pointer;
	}

	@media (max-width: 512px) {
		.wrapper {
			padding: 2em 0;
		}
		.page-content {
			margin-top: 0;
		}

		.card {
			width: 90%;
		}

		.card__content {
			padding: 40px 15px 48px 15px;
		}

		.content__title {
			text-align: center;
		}

		.content__submit {
			width: 100%;
		}
	}

</style>
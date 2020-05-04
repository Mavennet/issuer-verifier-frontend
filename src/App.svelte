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
	import LoadingSpinner from './components/LoadingSpinner.svelte';
	import Checklist from './components/Checklist.svelte';

	import { 
		getCredentialQuery, 
		getVerifiablePresentation, 
		getOptions,
		replaceUuidUrlId
	} from './helpers';

	import { credentialOptions } from './options/credentialOptions';
	import { issuerOptions } from './options/issuerOptions';
	import { verifierOptions } from './options/verifierOptions';

	import { 
		ISSUER_MESSAGE, 
		VERIFIER_MESSAGE, 
		FORM_MESSAGE,
		SNACKBAR_TYPE,
		COMPANIES,
		CREDENTIAL_PRESENTATION
	} from './consts';


	const 
		logoSrc = './assets/images/mavennet_logo_white.png',
		apiUrl = process.env.API_URL;

	/**
	 * General variables
	 */
	let	
		polyfillInstance = null,
		selectedTab = 0,
		isLoading = false,
		isSnackbarShowing = false,
		snackbarMessage,
		snackbarType,
		vcChoice;

	/**
	 * Issuer variable
	 */
	let
		issuer = '',
		name = '',
		description = '',
		selectedIssuerCompany,
		selectedIssuerName,
		issuerNameOpt = [],
		issuerDidOpt = [];

	/**
	 * Verifier variable
	 */
	let
		selectedVerifier;

	/**
	 * Dynamically loads the issuer (did) options when a Issuer name is selected
	 */
	$: if (selectedIssuerCompany && selectedIssuerName) {
		const options = issuerOptions[selectedIssuerCompany].issuers.find(item => item.name === selectedIssuerName).options 
		issuerDidOpt = options.map(options => options.issuer);
		issuer = '';
	} else {
		issuerDidOpt = [];
		issuer = '';
	}

	$: if (vcChoice) {
		const currentVcObj = credentialOptions.find(vc => vc.label === vcChoice).value;
		name = currentVcObj.name ||'';
		description = currentVcObj.description || '';
	} else {
		name = '';
		description = '';
	}


	onMount(async () => {
		try {
			polyfillInstance = await polyfill.loadOnce();
			console.log('Ready to work with credentials!');
    } catch (e) {
      console.log('Error in Chapi LoadOnce', e);
		}
	});

	function selectTab(value) {
		selectedVerifier = null;
		issuer = null;
		vcChoice = null;
		selectedTab = value;
	}

	function showSnackbar(type, message) {
		isSnackbarShowing = true;
		snackbarType = type;
		snackbarMessage = message;
	}

	function setDisplaySnackBar(value) {
		isSnackbarShowing = value;
	}

	function validateIssueForm() {
		if (!vcChoice) {
			showSnackbar(SNACKBAR_TYPE.WARNING, FORM_MESSAGE.TYPE);
			return false;
		} else if (!selectedIssuerCompany) {
			showSnackbar(SNACKBAR_TYPE.WARNING, FORM_MESSAGE.COMPANY);
			return false;
		} else if (!selectedIssuerName) {
			showSnackbar(SNACKBAR_TYPE.WARNING, FORM_MESSAGE.NAME);
			return false;
		} else if (!issuer) {
			showSnackbar(SNACKBAR_TYPE.WARNING, FORM_MESSAGE.ISSUER);
			return false;
		}

		return true;
	}

	async function handleIssueVc() {
		if (!validateIssueForm()) {
			return;
		}

		let credential = credentialOptions.find(vc => vc.label === vcChoice).value;
		const correctIssuer = issuerOptions[selectedIssuerCompany].issuers.find(item => item.name === selectedIssuerName);
		const endPoint = correctIssuer.endpoint;
		const correctOption = correctIssuer.options.find(option => option.issuer === issuer);
		const assertionMethod = correctOption.assertionMethod;

		const options = getOptions(issuer, 'assertionMethod', assertionMethod);

		credential.id = replaceUuidUrlId(credential.id);
		credential.name = name;
		credential.description = description;
		credential = { ...credential, issuer, issuanceDate: options.issuanceDate};
		try {
			isLoading = true;
			const { data } = await axios.post(endPoint, { credential, options } );

			const vp = getVerifiablePresentation(data);

			const webCredential = new polyfillInstance.WebCredential(vp.type, vp);
			const result = await polyfillInstance.credentials.store(webCredential);

			if(!result) {
      	throw new Error('Store credential operation did not succeed');
			}
			
			showSnackbar(SNACKBAR_TYPE.SUCCESS, ISSUER_MESSAGE.SUCCESS);
		} catch(err) {
			console.log('Error issuing and storing VC', err);
			showSnackbar(SNACKBAR_TYPE.ERROR, ISSUER_MESSAGE.ERROR);
		} finally {
			isLoading = false;
		}
	}

	async function handleVerifyVc() {
		if (!validateVerifyForm()) {
			return;
		}

		let 
			apiUrl,
			dataToSend;

		const type = credentialOptions.find(vc => vc.label === vcChoice).label;
		const verifier = verifierOptions.find(verifier => verifier.id === selectedVerifier)
		const credentialQuery = getCredentialQuery(type);
		credentialQuery.web.VerifiablePresentation['domain'] = window.location.hostname;

		try {
			isLoading = true;
			const webCredential = await navigator.credentials.get(credentialQuery);
			if(!webCredential) {
      	throw new Error('Get credential operation did not succeed');
			}

			apiUrl = verifier.presentation_url
			dataToSend = { 
				verifiablePresentation: webCredential.data,
				options: {
					challenge: webCredential.data.proof.challenge,
					domain: window.location.hostname,
					checks: [
						'proof'
					]
				}
			};

			const { data } = await axios.post(apiUrl, dataToSend, {
				headers: {
            'Content-Type': 'application/json',
        }
			});

			showSnackbar(SNACKBAR_TYPE.SUCCESS, VERIFIER_MESSAGE.SUCCESS);
		} catch(err) {
			console.log('Error getting and verifying VC', err);
			showSnackbar(SNACKBAR_TYPE.ERROR, VERIFIER_MESSAGE.ERROR);
		} finally {
			isLoading = false;
		}
	}

	function validateVerifyForm() {
		if (!vcChoice) {
			showSnackbar(SNACKBAR_TYPE.WARNING, FORM_MESSAGE.TYPE);
			return false;
		}
		//  else if (selectedVerifier !== null) {
		// 	showSnackbar(true, FORM_MESSAGE.VERIFIER);
		// 	return false;
		// }

		return true;
	}

	function selectVerifier(id) {
		selectedVerifier = id;
	}

	function selectIssuerCompany(key) {
		selectedIssuerCompany = key;
		selectedIssuerName = '';
		issuerNameOpt = issuerOptions[selectedIssuerCompany].issuers.map(issuer => issuer.name);
		issuer = '';
	}
</script>


<div class="wrapper">
	<Checklist></Checklist>
	<Snackbar 
		text={snackbarMessage} 
		display={isSnackbarShowing} 
		onHide={() => isSnackbarShowing = false}
		type={snackbarType}></Snackbar>
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
						<div class="content__verifiers">
							<h2 class="verifiers__title">Select an Issuer</h2>
							<ul class="verifiers__list">
								{#each Object.keys(issuerOptions) as issuerCompanyItem}
									<li class="list__item">
										<img 
											class="item__logo" 
											src={`./assets/images/${issuerOptions[issuerCompanyItem].src}`} 
											alt={issuerOptions[issuerCompanyItem].alt}
											class:item__logo--active="{selectedIssuerCompany === issuerCompanyItem}"
											on:click={() => selectIssuerCompany(issuerCompanyItem)}>
									</li>
								{/each}
							</ul>
						</div>
						<Select enhanced variant="outlined" bind:value={vcChoice} label="Type" class="content__input">
							{#each credentialOptions as credential}
								<Option value={credential.label} selected={vcChoice === credential.label}>{credential.label}</Option>
							{/each}
						</Select>
						<Select enhanced variant="outlined" disabled={!selectedIssuerCompany} bind:value={selectedIssuerName} on:change="{() => console.log('teste')}" label="Issuer Name" class="content__input">
							{#each issuerNameOpt as issuerName}
								<Option value={issuerName} selected={issuerName === selectedIssuerName}>{issuerName}</Option>
							{/each}
						</Select>
						<Select enhanced variant="outlined" disabled={!selectedIssuerName} bind:value={issuer} label="Issuer" class="content__input">
							{#each issuerDidOpt as did}
								<Option value={did} selected={did === issuer}>{did}</Option>
							{/each}
						</Select>
						<Textfield bind:value={name} label="Name" disabled={!vcChoice}/>
						<Textfield bind:value={description} label="Description" disabled={!vcChoice}/>
						<button class="content__submit" on:click={handleIssueVc}>
							{#if isLoading}
								<LoadingSpinner />
							{:else}
								RECEIVE
							{/if}
						</button>
					</div>
				{:else if selectedTab === 1}
					<div class="content" in:fly="{{ x: 200, duration: 700 }}">
						<h1 class="content__title">Verify From Wallet</h1>
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
						<Select enhanced variant="outlined" bind:value={vcChoice} label="Type" class="content__input content__input--last">
							{#each credentialOptions as credential}
								<Option value={credential.label} selected={vcChoice === credential.label}>{credential.label}</Option>
							{/each}
						</Select>
						<button class="content__submit" on:click={handleVerifyVc}>
							{#if isLoading}
								<LoadingSpinner />
							{:else}
								VERIFY
							{/if}
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
	}

	.logo {
		margin-bottom: 20px;
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

		/* height: 419px; */
		width: 525px;
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
		height: 555px;
		padding: 24px 43px 22px 47px;
	}

	.content__title {
		font-size: 24px;
		font-weight: 500;
		letter-spacing: 0;
		line-height: 28px;

		margin-bottom: 1.1em;
	}

	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	* :global(select, .content__input) {
		margin-bottom: 12px;
	}

	* :global(select, .content__input--last) {
		margin-bottom: 38px;
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
		margin: 0 10px 5px 10px;
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

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: var(--clr-button-background);
		padding: 0.9375em 1.875em;
		border-radius: 3px;
		cursor: pointer;
		margin-bottom: 0;
		margin-top: auto;
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
			height: auto;
		}

		.content__title {
			text-align: center;
		}

		.content__submit {
			width: 100%;
		}
	}

</style>
<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import * as polyfill from 'credential-handler-polyfill';
	import axios from 'axios';
	import { v4 as uuidv4 } from 'uuid';

	import Select, {Option} from '@smui/select';
	import Textfield from '@smui/textfield';
	import '@smui/select.css';
	import '@smui/textfield.css';

	import { vcList } from './consts';


	const 
		logoSrc = './assets/images/mavennet_logo.png',
		apiUrl = process.env.API_URL;

	let	
		selectedTab = 0,
		vcChoice = '',
		did = '',
		polyfillInstance = null,
		isLoading = false;


	onMount(async () => {
		try {
			polyfillInstance = await polyfill.loadOnce();
			console.log('Ready to work with credentials!');
    } catch (e) {
      console.log('Error in Chapi LoadOnce', e);
		}
	});

	function getVerifiablePresentation(verifiableCredential) {
		return ({
			"@context": [
				"https://www.w3.org/2018/credentials/v1"
			],
			"type": "VerifiablePresentation",
			"verifiableCredential": verifiableCredential
		});
	}

	function getCredentialQuery(type) {
		return {
			web: {
				VerifiablePresentation: {
					query: [
						{
							type: 'QueryByExample',
							credentialQuery: {
                reason: `Please present an ${type} credential.`,
                example: {
                  '@context': [
                    'https://www.w3.org/2018/credentials/v1',
                    "https://schema.org/"
                  ],
                  type: [type],
                },
              },
						}
					],
					challenge: uuidv4()
				}
			}
		}
	}

	async function handleIssueVc() {
		const vc = vcList.find(vc => vc.id === parseInt(vcChoice)).value;

		try {
			isLoading = true;
			const { data } = await axios.post(`${apiUrl}/credentials/issueCredential`, { credential: vc } );

			const vp = getVerifiablePresentation(data);

			const webCredential = new polyfillInstance.WebCredential(vp.type, vp);
			const result = await polyfillInstance.credentials.store(webCredential);

			if(!result) {
      	throw new Error('Store credential operation did not succeed');
    	}
		} catch(err) {
			console.log('Error issuing and storing VC', err);
		} finally {
			isLoading = false;
		}
	}

	async function handleVerifyVc() {
		const type = vcList.find(vc => vc.id === parseInt(vcChoice)).label;
		const credentialQuery = getCredentialQuery(type);

		try {
			isLoading = true;
			const webCredential = await navigator.credentials.get(credentialQuery);
		console.log(webCredential);
			if(!webCredential) {
      	throw new Error('Get credential operation did not succeed');
			}
			
			const { data } = await axios.post(`${apiUrl}/verifier/credentials`, { verifiableCredential: webCredential.data });
			console.log(data);
		} catch(err) {
			console.log('Error getting and verifying VC', err);
		} finally {
			isLoading = false;
		}
	}

	function selectTab(value) {
		selectedTab = value;
	}
</script>


<div class="wrapper">
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
							<Option value=""></Option>
							{#each vcList as vc}
								<Option value={vc.id} selected={vcChoice === vc.id}>{vc.label}</Option>
							{/each}
						</Select>
						<Textfield variant="outlined" bind:value={did} label="Issuer*" class="content__input"/>
						<button class="content__submit" on:click={handleIssueVc}>
							RECEIVE
						</button>
					</div>
				{:else if selectedTab === 1}
					<div class="content" in:fly="{{ x: 200, duration: 700 }}">
						<h1 class="content__title">Verify From Wallet</h1>
						<Select enhanced variant="outlined" bind:value={vcChoice} label="Type" class="content__input">
							<Option value=""></Option>
							{#each vcList as vc}
								<Option value={vc.id} selected={vcChoice === vc.id}>{vc.label}</Option>
							{/each}
						</Select>
						<Textfield variant="outlined" bind:value={did} label="Issuer*" class="content__input"/>
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

		box-sizing: content-box;
	}

	.page-content {
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
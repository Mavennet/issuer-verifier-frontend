<script>
	import Select, {Option} from '@smui/select';
	import Textfield from '@smui/textfield';
	import '@smui/select.css';
	import '@smui/textfield.css';

	import { vcList } from './consts';


	let logoSrc = './assets/images/mavennet_logo.png';

	let selectedTab = 0;

	let vcChoice = '';
	let did = '';

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
					<div class="content">
						<h1 class="content__title">Add To Wallet</h1>
						<Select enhanced variant="outlined" bind:value={vcChoice} label="Type" class="content__input">
							<Option value=""></Option>
							{#each vcList as vc}
								<Option value={vc.id} selected={vcChoice === vc.id}>{vc.label}</Option>
							{/each}
						</Select>
						<Textfield variant="outlined" bind:value={did} label="Issuer*" class="content__input"/>
						<button class="content__submit">
							RECEIVE
						</button>
					</div>
				{:else if selectedTab === 1}
					<div class="content">
						<h1 class="content__title">Verify From Wallet</h1>
						<Select enhanced variant="outlined" bind:value={vcChoice} label="Type" class="content__input">
							<Option value=""></Option>
							{#each vcList as vc}
								<Option value={vc.id} selected={vcChoice === vc.id}>{vc.label}</Option>
							{/each}
						</Select>
						<Textfield variant="outlined" bind:value={did} label="Issuer*" class="content__input"/>
						<button class="content__submit">
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
		display: flex;
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
	}

	* :global(select, .content__input) {
		width: 100%;
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
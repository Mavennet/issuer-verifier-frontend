<script>
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import LinearProgress from '@smui/linear-progress';

  export let isRawMaterial;
  export let content;

  let 
    isDrawerOpen = false,
    checkedAmount = 0,
    completePercentage = 0,
    checkListObj = content.reduce((res, curr, index) => ({ ...res, index: false }), {});

  function closeDrawer() {
    isDrawerOpen = false;
  }

  function openDrawer() {
    isDrawerOpen = true;
  }

  function updateProgress(event) {
    const { checked } = event.target;

    checkedAmount = checked ? checkedAmount + 1 : checkedAmount - 1;
    completePercentage = checkedAmount / content.length;
  }

</script>


<div class="container">
  <button class="checklist__button" class:button--isRawMaterial="{isRawMaterial}" on:click={openDrawer} >
    <img class="button__icon" src={`assets/icons/${isRawMaterial ? 'tint-solid' : 'id-card-regular'}.svg`} alt="checkbox icon">
  </button>

  <div class="drawer" class:drawer--open="{isDrawerOpen}" class:drawer--isRawMaterial="{isRawMaterial}">
    <header class="drawer__header">
      <img class="header__close-icon" on:click={closeDrawer} src="assets/icons/times-solid.svg" alt="close icon">
    </header>
    <h2 class="drawer__title">{isRawMaterial ? 'Raw Materials' : 'PRC'}</h2>
    <LinearProgress style="margin-bottom: 25px" progress={completePercentage}/>
    <div class="drawer__wallet">
      <h3 class="wallet__title">Wallet</h3>
      <img class="wallet__image" src={`./assets/images/${content[0].wallet}_logo.png`} alt={`${content[0].wallet} logo`}>
    </div>
    <ul class="drawer__checklist">
        <div class="checklist__title">
          <p class="title__item">Issuer</p> 
          <p class="title__item">Verifier</p>
        </div>
        {#each content as testCase, index}
          {#if !isRawMaterial && index === 4}
            <div class="drawer__wallet">
              <h3 class="wallet__title">Wallet</h3>
              <img class="wallet__image wallet__image--big" src={`./assets/images/${content[index].wallet}_logo.png`} alt={`${content[index].wallet} logo`}>
            </div>
          {/if}
          <FormField style="margin-bottom: 25px">
              <Checkbox on:change={updateProgress} bind:checked={checkListObj[index]} />
              <span class="checklist__label" slot="label">
                <div class="label__image">
                  <img class:image--square="{testCase.issuer === 'sicpa'}" src={`./assets/images/${testCase.issuer}_logo.png`} alt={`${testCase.issuer} logo`}>
                </div>
                <div class="label__arrow-icon">
                  <img src="./assets/icons/long-arrow-alt-right-solid.svg" alt="right arrow icon">
                </div>
                <div class="label__image">
                  <img class:image--square="{testCase.verifier === 'sicpa'}" src={`./assets/images/${testCase.verifier}_logo.png`} alt={`${testCase.verifier} logo`}>
                </div>
              </span>
          </FormField>
        {/each}
    </ul>
  </div>
</div>


<style>
  .checklist__button {
    position: fixed;
    z-index: 99999;
    bottom: 30px;
    right: 30px;
    width: 75px;
    height: 75px;
    background-color: white;
    border-radius: 100%;

    -webkit-box-shadow: 0px 0px 36px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 36px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 36px -6px rgba(0,0,0,0.75);

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button--isRawMaterial {
    bottom: 30px;
    left: 30px;
  }

  .button__icon {
    width: 35px;
    color: var(--pallete-medium-purple);
  }

  .drawer {
    position: fixed;
    right: -33vw;
    bottom: 30px;
    width: 33vw;
    height: 85vh;
    z-index: 999999;
    background-color: white;

    border-radius: 4px 0 0 4px;

    padding: 25px 45px 25px 35px;

    font-family: 'Roboto', sans-serif;

    transition: all .5s cubic-bezier(0.820, 0.085, 0.395, 0.895);
    -webkit-box-shadow: -6px 0px 36px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: -6px 0px 36px -6px rgba(0,0,0,0.75);
    box-shadow: -6px 0px 36px -6px rgba(0,0,0,0.75);

    overflow-y: scroll;
  }

  .drawer.drawer--isRawMaterial {
    left: -34vw;
    right: auto;
    border-radius: 0 4px 4px 0 !important;
  }

  .drawer--open {
    right: 0 !important;
  }

  .drawer--isRawMaterial.drawer--open {
    left: 0 !important;
    right: auto !important;
  }

  .drawer__header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .header__close-icon {
    width: 18px;
    cursor: pointer;
    justify-self: flex-end;
  }

  .drawer__title {
    font-size: 37px;
		font-weight: 500;
		letter-spacing: 0;
    line-height: 28px;
    margin-bottom: 23px;
  }

  .drawer__wallet {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 25px;
  }

  .wallet__title {
    color: #9b9b9b;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    font-weight: normal;
    margin-bottom: 8px;
  }

  .wallet__image {
    max-height: 40px;
    max-width: 200px;
  }

  .wallet__image--big {
    max-height: 100px;
  }

  .drawer__checklist {
    display: flex;
    flex-direction: column;
    padding-right: 15px;
    margin-top: 25px;
  }

  .checklist__title {
    margin-left: 40px;
    margin-bottom: 25px;
    padding-left: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #9b9b9b;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;

    text-align: center;
  }

  .title__item {
    width: 35%;
  }

  .checklist__label {
		font-size: 18px;
		font-weight: 400;
		letter-spacing: 0;
    line-height: 28px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
  }

  .label__image{
    width: 35%;
  }

  .label__image img {
    width: 100%;
  }

  .label__image .image--square {
    width: 80px;
    height: 80px;
    margin-left: calc(50% - 40px);
  }

  .label__arrow-icon {
    width: 10%;
  }

  :global(.mdc-linear-progress__bar-inner) {
    background-color: #964BEB !important;
  }

  @media (max-width: 1064px) {
    .drawer {
      width: 50vw;	
      right: -50vw;
    }
  }

  @media (max-width: 715px) {
    .drawer {
      width: 100vw;	
      right: 100vw;
    }
  }

  @media (max-width: 385px) {
    .drawer {
      padding: 25px 25px 25px 20px;
    }

    .drawer__checklist {
      padding-right: 0;
    }

    .checklist__label,
    .checklist__title {
      padding-left: 2%;
    }
  }
</style>
<script>
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import LinearProgress from '@smui/linear-progress';
  import {testSuit} from '../content/testSuit.js';

  let 
    isDrawerOpen = false,
    checkedAmount = 0,
    completePercentage = 0,
    checkListObj = testSuit.reduce((res, curr, index) => ({ ...res, index: false }), {});

  function closeDrawer() {
    isDrawerOpen = false;
  }

  function openDrawer() {
    isDrawerOpen = true;
  }

  function updateProgress(event) {
    const { checked } = event.target;

    checkedAmount = checked ? checkedAmount + 1 : checkedAmount - 1;
    completePercentage = checkedAmount / testSuit.length;
  }

</script>


<div class="container">
  <button class="checklist__button" on:click={openDrawer} >
    <img class="button__icon" src="assets/icons/check-square-regular.svg" alt="checkbox icon">
  </button>

  <div class="drawer" class:drawer--open="{isDrawerOpen}">
    <header class="drawer__header">
      <img class="header__close-icon" on:click={closeDrawer} src="assets/icons/times-solid.svg" alt="close icon">
    </header>
    <h2 class="drawer__title">Test Cases</h2>
    <LinearProgress style="margin-bottom: 45px" progress={completePercentage}/>
    <ul class="drawer__checklist">
        <div class="checklist__title">
          <p class="title__item">Issuer</p> 
          <p class="title__item">Verifier</p>
        </div>
        {#each testSuit as testCase, index}
        <FormField style="margin-bottom: 25px">
          <Checkbox on:change={updateProgress} bind:checked={checkListObj[index]} />
          <span class="checklist__label" slot="label">
            <img class="label__image" src={`./assets/images/${testCase.issuer}_logo.png`} alt={`${testCase.issuer} logo`}>
            <img class="label__image" src={`./assets/images/${testCase.verifier}_logo.png`} alt={`${testCase.verifier} logo`}>
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

    transition: right .5s cubic-bezier(0.820, 0.085, 0.395, 0.895);
    -webkit-box-shadow: -6px 0px 36px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: -6px 0px 36px -6px rgba(0,0,0,0.75);
    box-shadow: -6px 0px 36px -6px rgba(0,0,0,0.75);
  }

  .drawer--open {
    right: 0 !important;
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
    font-size: 24px;
		font-weight: 500;
		letter-spacing: 0;
    line-height: 28px;
    margin-bottom: 23px;
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

  .label__image {
    width: 35%;
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
      right: -100vw;
    }
  }
</style>
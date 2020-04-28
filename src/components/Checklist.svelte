<script>
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import {testSuit} from '../content/testSuit.js';

  let isDrawerOpen = false;
  let checkListObj = testSuit.reduce((res, curr) => ({ ...res, curr: false }), {});

  function closeDrawer() {
    isDrawerOpen = false;
  }

  function openDrawer() {
    isDrawerOpen = true;
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
    <h2 class="drawer__title">Checklist</h2>
    <ul class="drawer__checklist">
        {#each testSuit as testCase}
        <FormField>
          <Checkbox bind:checked={checkListObj[testCase]} />
          <span class="checklist__label" slot="label">{testCase}</span>
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
    width: 80px;
    height: 80px;
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
  }

  .checklist__label {
		font-size: 18px;
		font-weight: 400;
		letter-spacing: 0;
		line-height: 28px;
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
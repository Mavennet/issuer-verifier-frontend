<script>
  import { SNACKBAR_TYPE } from '../consts';

  export let display;
  export let text;
  export let onHide;
  export let type;
  export let delay = 3000;

  let timeout;

  $: {
    if (display) {
      timeout = setTimeout(() => onHide(), delay);
    }
  }

  function handleClick($event) {
    $event.preventDefault();
    clearTimeout(timeout);
    onHide();
  }
</script>


{#if display}
  <div
    on:click={handleClick}
    class="snackbar" 
    class:snackbar--error="{type === SNACKBAR_TYPE.ERROR}"
    class:snackbar--warning="{type === SNACKBAR_TYPE.WARNING}">
    <img class="snackbar__icon" src={`./assets/icons/${type}-icon.svg`} alt={`${type} icons`}>
    <p>{text}</p>
  </div>
{/if}

<style>
  .snackbar {
    color: var(--pallete-white);
    font-family: Helvetica, Arial, sans-serif;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0;
    line-height: 20px;
    word-wrap: normal;
    cursor: pointer;
    
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    position: absolute;
    top: 12px;
    right: 12px;
    width: 300px;
    padding: 15px 15px 15px 15px;

    background-color: var(--pallete-medium-purple);
    border-radius: 3px;

    -webkit-box-shadow: 0px 0px 12px -20px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 12px -20px rgba(0,0,0,1);
    box-shadow: 0px 0px 12px -20px rgba(0,0,0,1);
  }

  .snackbar--error {
    background-color: var(--pallete-danger);
  }

  .snackbar--warning {
    background-color: var(--pallete-california);
  }

  .snackbar__icon {
    width: 25px;
    margin-right: 10px;
  }
</style>
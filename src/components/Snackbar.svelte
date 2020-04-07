<script>
  export let display;
  export let text;
  export let onHide;
  export let error;
  export let delay = 3000;

  $: {
    if (display) {
      setTimeout(() => onHide(), delay);
    }
  }
</script>


<div 
  class="snackbar" 
  class:snackbar--hidden="{!display}"
  class:snackbar--error="{error}">
  <p>{text}</p>
</div>

<style>
  .snackbar {
    color: var(--pallete-white);
    font-family: 'Roboto', sans-serif;
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 0;
    line-height: 28px;
    word-wrap: normal;
    
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 15px;
    right: 15px;
    max-width: 260px;
    max-height: 90px;
    padding: 1em 2em;

    background-color: var(--pallete-medium-purple);
    border-radius: 10px;

    -webkit-box-shadow: 0px 3px 43px -20px rgba(0,0,0,1);
    -moz-box-shadow: 0px 3px 43px -20px rgba(0,0,0,1);
    box-shadow: 0px 3px 43px -20px rgba(0,0,0,1);
  }

  .snackbar--hidden {
    display: none;
  }

  .snackbar--error {
    background-color: var(--pallete-danger);
  }
</style>
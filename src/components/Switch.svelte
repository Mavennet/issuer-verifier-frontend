<script>
	import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let selectedVerification = 0;

  function handleClick(id) {
    selectedVerification = id;
    dispatch('selectedVerification', {
			id: id
		});
  }
</script>

<div class="switch">
  <div on:click={() => handleClick(0)} class="switch__option" class:switch__option--selected="{selectedVerification === 0}">
    Credential
  </div>
  <div on:click={() => handleClick(1)} class="switch__option" class:switch__option--selected="{selectedVerification === 1}">
    Presentation
  </div>
</div>

<style>
  .switch {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 4px;
    background-color: #C6C6C6;
    margin-bottom: 15px;
  }

  .switch__option {
    width: 50%;
    text-align: center;
    color: white;
    font-size: 1rem;
    padding: .5rem .75rem;
    cursor: pointer;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
  }

  .switch__option--selected {
    background-color: var(--pallete-medium-purple);
  }
</style>
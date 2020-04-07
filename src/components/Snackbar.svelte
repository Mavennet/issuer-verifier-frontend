<script>
  import Snackbar, {Actions, Label} from '@smui/snackbar';

  export let ref;
  export let text;
</script>


<Snackbar bind:this={ref} labelText={text}>
  <Label></Label>
</Snackbar>
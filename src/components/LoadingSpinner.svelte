<div class="loader"></div>

<style>
.loader {
  border: 3px solid var(--pallete-white); /* Light grey */
  border-top: 3px solid var(--pallete-medium-purple); /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
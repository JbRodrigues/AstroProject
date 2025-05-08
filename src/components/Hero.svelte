<script>
  import { fade } from 'svelte/transition';
  let count = 0;
  let showMessage = false;

  function handleClick() {
    count += 1;
    showMessage = true;
    setTimeout(() => (showMessage = false), 2000);
  }
</script>

<section class="hero">
  <h3>Componente Interativo com Svelte</h3>
  <p>Você clicou {count} vezes.</p>
  {#if showMessage}
    <p transition:fade={{ duration: 500 }}>Clicou!</p>
  {/if}
  <button on:click={handleClick}>Clique Aqui</button>
</section>

<style>
  .hero {
    background-color: #f0f0f0;
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  h3 {
    color: #2c3e50;
  }
  button {
    background-color: #3498db;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #2980b9;
  }
</style>
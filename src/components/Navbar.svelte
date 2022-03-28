<script>
  import Formular from "./Fomular.svelte";
  import Router from "svelte-spa-router";
  let isFormularOn = false;
  const toggleFormular = () => {
    if (isFormularOn) {
      isFormularOn = false;
    } else {
      isFormularOn = true;
    }
  };
</script>

<header class="bg-info text-white py-3 shadow-sm">
  <div class="container">
    <div
      class="d-flex flex-column flex-md-row justify-content-between align-items-center"
    >
      <div>
        <h1>Dashboard</h1>
        <p class="h4">
          <slot />
        </p>
      </div>
      <div>
        <ul class="nav text-white h4">
          <li class="nav-item">
            <a href="#/" class="nav-link link-light">Kartenansicht</a>
          </li>
          <li class="nav-item">
            <a href="#/tabelle" class="nav-link link-light">Tabellenansicht</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
<div class="container mt-3">
  <button class="btn btn-outline-secondary" on:click={toggleFormular}>
    {#if !isFormularOn}
      + Neue Todos hinzufügen
    {:else}
      X
    {/if}
  </button>
</div>
{#if isFormularOn}
  <!-- content here -->
  <Formular />
{/if}

<script>
  import { createEventDispatcher } from "svelte";
  export let id, title, content, completed;

  const dispatch = createEventDispatcher();

  function update() {
    dispatch("update", { id, title, content, completed });
  }
</script>

<div class="aufgabe" class:completed>
  <h1 class="text-input">{title}: {content}</h1>
  <input
    type="checkbox"
    bind:checked={completed}
    on:change={() => update()}
    class="checkbox-completed"
  />
</div>

<style>
  .aufgabe {
    display: flex;
    align-items: center;
    padding: 5px;
  }
  .aufgabe.completed {
    background-color: lightgreen;
    text-decoration: line-through;
    transition: background-color 2s;
  }
  .text-input {
    flex-grow: 1;
    font-size: 1em;
  }
  .checkbox-completed {
    margin-left: 50px;
  }
</style>

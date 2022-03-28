<script>
  import { fade } from "svelte/transition";
  import Todo from "./Todo.svelte";
  import ListAPI from "../store/ListAPI";
  import { aufgaben } from "../store/stores";

  let sortTodo = [];

  $: {
    sortTodo = [...$aufgaben];
    sortTodo.sort((a, b) =>
      a.completed && b.completed ? 0 : a.completed ? 1 : -1,
    );
  }

  function update(e) {
    console.log(e.detail);
    const index = $aufgaben.findIndex((aufgabe) => aufgabe.id === e.detail.id);
    $aufgaben[index] = e.detail;
    ListAPI.save($aufgaben);
  }
</script>

<div class="container" in:fade>
  <div class="card my-3">
    <div class="card-body">
      {#each sortTodo as aufgabe}
        <!-- content here -->
        <div class="table">
          <Todo {...aufgabe} on:update={update} />
        </div>
      {:else}
        <div class="alert alert-success" role="alert">
          <p class="h2">Alle Aufgaben erledigt!</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .table {
    padding: 5px;
    border-bottom: 1px solid #eee;
    margin: 0;
  }
</style>

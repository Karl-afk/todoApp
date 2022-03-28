<script>
  import Navbar from "./components/Navbar.svelte";
  import List from "./components/List.svelte";
  import Table from "./components/Table.svelte";
  import Router from "svelte-spa-router";
  import { onMount } from "svelte";
  import ListAPI from "./store/ListAPI";

  import { aufgaben } from "./store/stores";

  $: todos = $aufgaben.length;
  $: todosCompleted = $aufgaben.filter((aufgabe) => aufgabe.completed).length;

  onMount(async () => {
    $aufgaben = await ListAPI.load();
  });
</script>

<svelte:head>
  <!-- head content -->
  <title>Dashboard: {todosCompleted}/{todos}</title>
</svelte:head>
<Navbar>To-dos erledigt: {todosCompleted}/{todos}</Navbar>
<Router
  routes={{
    "/": List,
    "/tabelle": Table,
  }}
/>

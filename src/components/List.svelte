<script>
  import { aufgaben } from "../store/stores";
  import { fade } from "svelte/transition";

  const editTodo = (id) => {
    ListAPI.save($aufgaben);
  };

  const deleteTodo = (id) => {
    const ok = confirm("Soll die Aufgabe wirklich gelöscht werden?");
    if (ok) {
      $aufgaben = $aufgaben.filter((aufgabe) => aufgabe.id != id);
    }
    ListAPI.save($aufgaben);
  };
</script>

<main class="container my-3">
  <div class="row">
    {#each $aufgaben as aufgabe (aufgabe)}
      <!-- content here -->
      <div class="col-sm-12 col-md-6 col-xl-4">
        <div class="card mb-3 shadow-sm" in:fade={{ duration: 500 }}>
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            <h5
              class="card-title  {aufgabe.completed === true
                ? 'text-decoration-line-through'
                : ''}"
            >
              {aufgabe.title}
            </h5>
            <div class="d-flex align-items-center">
              <input
                type="checkbox"
                class="form-check-input me-3"
                on:blur={() => editTodo(aufgabe.id)}
                bind:checked={aufgabe.completed}
              />
              <button
                class="btn btn-danger btn-close text-decoration-none"
                aria-label="Close"
                on:click={() => deleteTodo(aufgabe.id)}
              />
            </div>
          </div>
          <div
            class="card-body  {aufgabe.completed === true
              ? 'text-decoration-line-through'
              : ''}"
          >
            <textarea
              class="form-control"
              rows="3"
              on:blur={() => editTodo(aufgabe.id)}
              bind:value={aufgabe.content}
            />
          </div>
        </div>
      </div>
    {:else}
      <div class="alert alert-success" role="alert">
        <p class="h2">Alle Aufgaben erledigt!</p>
      </div>
    {/each}
  </div>
</main>

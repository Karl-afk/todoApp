<script>
  import { aufgaben } from "../store/stores";
  import { v4 as uuidv4 } from "uuid";
  import ListAPI from "../store/ListAPI";
  import { fade } from "svelte/transition";
  let title = "";
  let content = "";

  const saveFormular = () => {
    if (title.trim() === "" || content.trim() === "") {
      return;
    }
    $aufgaben = [
      {
        id: uuidv4(),
        title: title,
        content: content,
        completed: false,
      },
      ...$aufgaben,
    ];
    console.log($aufgaben);
    ListAPI.save($aufgaben);
    title = "";
    content = "";
  };
</script>

<div class="container" in:fade>
  <form on:submit|preventDefault={saveFormular} class="my-3">
    <div class="mb-3">
      <label for="title" class="visually-hidden">Titel</label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="Was gibt es heute zu tun?"
        bind:value={title}
      />
    </div>
    <div class="mb-3">
      <label for="content" class="visually-hidden">Inhalt</label>
      <textarea
        name="content"
        id="content"
        class="form-control"
        bind:value={content}
      />
    </div>
    <div class="input-group mb-3">
      <button type="submit" class="btn btn-primary me-3">Speichern</button>
      <button type="reset" class="btn btn-danger">Abbrechen</button>
    </div>
  </form>
</div>

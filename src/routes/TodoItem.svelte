<script>
	import { flip } from "svelte/animate";

  const { todo, onDeleteCallback, index } = $props()

</script>


<li>
  <input type="checkbox" />
  {todo}
  <button onclick={() => onDeleteCallback(index)}>Remove</button>
</li>

<style>

  li {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 8px;
    border-bottom: 1px solid lightgray;
  }


  button {
    border-radius: 4px;
    padding: 8px;
    color: #fff;
    border: none;
    background-color: rgb(240, 42, 62);
  }

  input[type="checkbox"] {
    width: 24px;
    height: 24px;
  }

</style>
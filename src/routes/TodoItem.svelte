<script>
  const { todo, onDeleteCallback, index } = $props()

</script>


<li>
  <input type="checkbox" />
  {todo}
  <button onclick={() => onDeleteCallback(index)}>Remove</button>
</li>

<script>
	import TodoItem from './TodoItem.svelte';
  let value = $state('');
  let todoList = $state([]);

  const onDelete = (index) => {
    console.log('remove')
    todoList = todoList.filter((_, i) => i !== index)
  }

	// let count = $state(1);
  // let value = $state('');
  // let arr = $state([]);

  // // create promise with result reject settimeout 2secs
  // let promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (Math.random() > 0.5)
  //       reject('Promise rejected');
  //     else
  //       resolve('Promise resolved');
  //   }, 2000);
  // });
</script>

<input bind:value />

<button type='submit' onclick={() => {
  todoList.push(value)
  value = ''
  }}>Add</button>

<ul>
  {#each todoList as todo, i}
    <TodoItem todo={todo} index={i} onDeleteCallback={onDelete} />
  {/each}
</ul>

<!-- {value}

<button onclick={() => count++}>+1</button>
<button onclick={() => arr.push(arr.length)}>add el to array</button>

{#if count % 2 === 0}
  <p>Even</p>
{:else}
  <p>Odd</p>
{/if}

{#each arr as item}
  <p>{item}</p>
  {:else}
  <p>Empty</p>
{/each}

{#key count}
  <span>{count}</span>
{/key}

{#await promise}
  <p>loading...</p>
{:then value}
  <p>{value}</p>
{:catch error}
  <p>{error}</p>
{/await}

{#snippet link(href, name)}
  <a href="https://href">{name}</a>
{/snippet}

{@render link('google.com', 'Google')}

<style>
 span {
  animation: fade 1s
 }

 @keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
 }

</style> -->

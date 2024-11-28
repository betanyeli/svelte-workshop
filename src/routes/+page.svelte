<script>
	import TodoItem from './TodoItem.svelte';
  let value = $state('');
  let todoList = $state([]);

  const onDelete = (index) => {
    console.log('remove')
    todoList = todoList.filter((_, i) => i !== index)
  }

  $effect(() => {
    console.log('todoList', todoList)
  })
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
<div>
<h1>TO DO LIST</h1>
<input bind:value />

<button disabled={value === ""} type='submit' onclick={() => {
 todoList.push(value)
  value = ''
  }}>Add</button>

<ul>
  {#each todoList as todo, i}
    <TodoItem todo={todo} index={i} onDeleteCallback={onDelete} />
  {/each}
</ul>
<a href="/about">About</a>
</div>
<style>

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 24px;
    border: 1px solid lightgray;
    border-radius: 4px;
    width: 75%;
    margin: 0 auto;
}
  h1 {
    font-family: Arial, sans-serif;
    text-align: center;
    color: #000000b4;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  button {
    border-radius: 4px;
    padding: 8px;
    background-color: azure;
    border: none;
    color:cornflowerblue;
  }

  button:disabled {
    background-color: lightgray;
    color: gray;
  }

  input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid lightgray;
  }

a {
  text-decoration: none;
  color: cornflowerblue;
}
</style>

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

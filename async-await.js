/*
✅ async/await: Modern way to handle Promises in a cleaner and more readable way
- 'async' makes the function return a Promise
- 'await' pauses the function execution until the Promise is resolved
*/

async function fetchTodos() {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
   const data = await res.json();
   console.log(data);
}

fetchTodos();

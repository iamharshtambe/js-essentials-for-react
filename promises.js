fetch('https://jsonplaceholder.typicode.com/todos')
   .then((res) => res.json())
   .then((data) => console.log(data));

/*
✅ Promises: Handle asynchronous operations; .then() runs after the fetch is complete
*/

console.log('This line will be executed first'); // Executes before fetch completes

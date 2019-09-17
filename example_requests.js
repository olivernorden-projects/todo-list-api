// Get todos
const getTodos = () => {
    return fetch('https://obscure-brook-05365.herokuapp.com/api/todos') // Default method is GET
        .then(res => res.json());
}

getTodos()
    .then(todos => {
        // Handle todos...
        console.log(todos);
    })
    .catch(err => console.error(err));



// Add todo
const addTodo = todo => {
    return fetch('https://obscure-brook-05365.herokuapp.com/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then(res => res.json());
}

const newTodoAdd = { todo: 'Write JavaScript' }
addTodo(newTodoAdd)
    .then(newTodo => {
        // Handle new todo
        console.log(newTodo);
    })
    .catch(err => console.error(err));



// Toggle complete state
const toggleTodo = id => {
    return fetch('https://obscure-brook-05365.herokuapp.com/api/todos', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })
        .then(res => res.json());
}

toggleTodo(toggleId)
    .then(toggledTodo => {
        // Handle toggled todo
        console.log(toggledTodo);
    })
    .catch(err => console.error(err));



// Delete todo
const deleteTodo = id => {
    return fetch(`https://obscure-brook-05365.herokuapp.com/api/todos/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json());
}

deleteTodo(deleteId)
    .then(res => {
        // Handle deletion
        console.log(res);
    })
    .catch(err => console.error(err));

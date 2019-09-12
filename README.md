# Todo list API
A simple API to add, delete, get and update todo list entries.

API url: todos.olivernorden.se

Content-type: application/json

HTTP methods: GET, POST, PUT, DELETE

## Examples

See below for example actions

### Get todos
```
const getTodos = () => {
    return fetch('http://todos.olivernorden.se/') // Default method is GET
        .then(res => res.json());
}

getTodos()
    .then(todos => {
        // Handle todos...
        console.log(todos);
    })
    .catch(err => console.error(err));
```

### Add todo
```
const addTodo = todo => {
    return fetch('http://todos.olivernorden.se/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then(res => res.json());
}
```

### Toggle complete of todo
```
const toggleTodo = id => {
    return fetch('http://todos.olivernorden.se/', {
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
}
```

### Delete todo
```
const deleteTodo = id => {
    return fetch(`http://todos.olivernorden.se/${id}`, {
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
```


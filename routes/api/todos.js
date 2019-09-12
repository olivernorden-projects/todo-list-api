const express = require('express');
const router = express.Router();

// Import Todo model
const Todo = require('../../models/todos');

// @route   GET api/todos
// @desc    Get all todos
// @access  Public
router.get('/', (req, res) => {
    Todo.find()
        .sort({ date: -1 })
        .then( todos => res.json(todos));
});

// @route   POST api/todos
// @desc    Add a new todo
// @access  Public
router.post('/', (req, res) => {
    const { todo } = req.body;

    // Validation 
    if (!todo) {
        res.status(400).json({ msg: "Please enter all field" });
        return;
    }

    const newTodo = new Todo({
        todo
    })

    newTodo.save()
        .then(todo => res.json(todo));
});

// @route   DELETE api/todos:id
// @desc    Add a new todo
// @access  Public
router.delete('/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(()=>res.json({ success: true }))
        .catch(err => res.status(404).status({ success: false }));
});

// @route   PUT api/todos
// @desc    Toggle completed state of a todo
// @access  Public
router.put('/', (req, res) => {
    Todo.findById(req.body.id)
        .then(todo => {
            todo.completed = !todo.completed;
            todo.save()
                .then(todo => res.json(todo));
        });
});

module.exports = router;
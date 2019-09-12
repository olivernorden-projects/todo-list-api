const express = require('express');
const router = express.Router();

// Import Todo model
const Todo = require('../../models/todos');

// @route   GET api/vehicles
// @desc    Get user's vehicles
// @access  Private
router.get('/', (req, res) => {
    Todo.find()
        .sort({ date: -1 })
        .then( todos => res.json(todos));
});

module.exports = router;
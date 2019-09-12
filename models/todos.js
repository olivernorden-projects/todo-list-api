const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Todos Schema
let TodosSchema = new Schema({
    todo: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Auto delete after 1 hour
TodosSchema.index({ date: 1 }, { expireAfterSeconds: 3600 });

module.exports = Todo = mongoose.model('todos', TodosSchema);
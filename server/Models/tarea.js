const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    name: String,
    done: Boolean,
    userEmail: String
})

const Tarea = mongoose.model('Tarea', tareaSchema);

module.exports = { Tarea };
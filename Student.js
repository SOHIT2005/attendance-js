const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    rollNumber: String,
    class: String,
    email: String,
});

module.exports = mongoose.model('Student', StudentSchema);

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Add Student
router.post('/', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

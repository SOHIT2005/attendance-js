const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

// Mark Attendance
router.post('/', async (req, res) => {
    try {
        const attendance = await Attendance.create(req.body);
        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Attendance
router.get('/', async (req, res) => {
    try {
        const attendance = await Attendance.find()
            .populate('studentId')
            .populate('subjectId');
        res.status(200).json(attendance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

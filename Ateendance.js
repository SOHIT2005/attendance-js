const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    date: Date,
    status: String, // Present or Absent
});

module.exports = mongoose.model('Attendance', AttendanceSchema);

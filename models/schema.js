const mongoose = require('mongoose');

// Student Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Student’s full name
    },
    email: {
        type: String,
        required: true,
        unique: true // Used for student login and communication
    },
    enrollmentDate: {
        type: Date,
        default: Date.now // Tracks when the student registered
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course' // Stores list of enrolled course IDs
    }]
});

const Student = mongoose.model('Student', studentSchema);

// Course Schema
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // Course title
    },
    description: {
        type: String // Short course description
    },
    durationWeeks: {
        type: Number,
        required: true // Course length in weeks
    },
    instructor: {
        type: String,
        required: true // Name of the course instructor
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = { Student, Course };

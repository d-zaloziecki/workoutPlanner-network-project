const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teacherSchema = new Schema({
    
});

const Teacher = mongoose.model('teacher', teacherSchema)

module.exports = Teacher;
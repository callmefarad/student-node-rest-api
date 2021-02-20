// creating an instance of mongoose
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    course: {
        type: String,
        require: true,
    },
    picture: {
        type: String,
        require: true,
    }
});

// creating the model
const studentModel = mongoose.model("studentModel", studentSchema);

// making the model file generally available
module.exports = studentModel;
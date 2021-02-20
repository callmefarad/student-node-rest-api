const express = require('express');
const studentModel = require('../model/model');
const multer = require('multer');


// -----------------------------------------------------------------------------------------------
// creating functions for image uploads
// function for the image storage
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads');
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// function for uploads
const imageUpload = multer({ storage: storage }).single('picture');
// ------------------------------------------------------------------------------------------------

// functions for other data
// function to create new student
const newStudent = async (req, res) => {
    try {
        const student = await studentModel.create({
            name: req.body.name,
            course: req.body.course,
            picture: req.file.path
        });
        res.json({ student });
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// function to get all student
const allStudent = async (req, res) => {
    try {
        const student = await studentModel.find();
        res.json(student)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// function to delete all student
const deleteAll = async (req, res) => {
    try {
        const del = await studentModel.deleteMany();
        res.json({message: 'All students have been deleted successfully'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// function to update a student
const updateStudent = async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id)
        const updateNow = student.updateOne(req.body)
        res.json(updateNow);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// function to retrieve a student
const getOneStudent = async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id);
        res.json(student);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// delete one student
const delOneStudent = async (req, res) => {
    try {
        const student = await studentModel.findById(req.params.id);
        const delStudent = student.deleteOne();
        res.json({message: `Student with id: ${student.id} has been deleted successfully`})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



module.exports = {
  imageUpload,
  newStudent,
  allStudent,
  deleteAll,
  updateStudent,
  getOneStudent,
  delOneStudent,
};
const express = require('express');
const {
  imageUpload,
  newStudent,
  allStudent,
  deleteAll,
  updateStudent,
  getOneStudent,
  delOneStudent,
} = require("../controller/controller");
const router = express.Router();




// API ROUTES
router.get("/students", imageUpload, allStudent);
router.post("/students", imageUpload, newStudent);
router.delete("/students", deleteAll);

router.put("/students/:id", imageUpload, updateStudent);
router.delete("/students/:id", delOneStudent);
router.get("/students/:id", getOneStudent);


module.exports = router;
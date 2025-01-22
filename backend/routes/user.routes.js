const express = require("express");
const {signInStudent, signInTeacher, signUpTeacher, signUpStudent, getTeachers} = require("../controllers/user.controller.js");

const router = express.Router();

router.get('/get-teachers', getTeachers);

router.post('/auth-student', signInStudent);
router.post('/auth-teacher', signInTeacher);
router.post('/reg-teacher', signUpTeacher);
router.post('/reg-student', signUpStudent);


module.exports = router;
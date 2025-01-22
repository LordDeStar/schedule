const express = require("express");
const {signInStudent, signInTeacher, signUpTeacher, signUpStudent} = require("../controllers/user.controller");

const router = express.Router();

router.post('/auth-student', signInStudent);
router.post('/auth-teacher', signInTeacher);
router.post('/reg-teacher', signUpTeacher);
router.post('/reg-student', signUpStudent);


module.exports = router;
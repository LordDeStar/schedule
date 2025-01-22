const express = require('express');
const { getGrades, getAVGGrades, setGrade } = require('../controllers/cabinet.controller');
const router = express.Router();


router.get('/get-grades', getGrades);
router.get('/get-avg', getAVGGrades);
router.post('/set-grade', setGrade);

module.exports = router;
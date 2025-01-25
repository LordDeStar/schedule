const express = require('express');
const {setScheduleFromFile, getSchedule} = require('../controllers/schedule.controller.js');
const {getSubjects, createSubject} = require('../controllers/subjects.controller.js');
const router = express.Router();


router.post('/create-subject', createSubject);
router.post('/set', setScheduleFromFile);
router.get('/get', getSchedule);
router.get('/get-subjects', getSubjects);
module.exports = router;
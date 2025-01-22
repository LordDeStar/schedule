const express = require('express');
const {setScheduleFromFile, getSchedule} = require('../controllers/schedule.controller.js');
const router = express.Router();

router.post('/set', setScheduleFromFile);
router.get('/get', getSchedule);

module.exports = router;
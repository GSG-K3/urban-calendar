const express = require('express');

const router = express.Router();
const customerInfo = require('./postCustomer');
const timeSlots = require('./getTimeSlots');

router.post('/api/questions/user-info', customerInfo);
router.get('/api/timeslots', timeSlots);

module.exports = router;

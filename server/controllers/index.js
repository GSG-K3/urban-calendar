const express = require('express');

const router = express.Router();
const customerInfo = require('./postCustomer');
const timeSlots = require('./getTimeSlots');
const getReservationData = require('./getReservationData');

router.post('/api/questions/user-info', customerInfo);
router.get('/api/timeslots', timeSlots);
router.post('/api/getReservationData', getReservationData);

module.exports = router;

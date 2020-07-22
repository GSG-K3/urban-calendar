const express = require('express');

const router = express.Router();
const customerInfo = require('./postCustomer');
const timeSlots = require('./getTimeSlots');
const getReservationData = require('./getReservationData');
const { Error404 } = require('../helpers/errors');
const { Error500 } = require('../helpers/errors');

router.post('/api/questions/user-info', customerInfo);
router.get('/api/timeslots', timeSlots);
router.get('/api/reservations', getReservationData);
router.use(Error404);
router.use(Error500);
module.exports = router;

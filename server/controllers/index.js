const express = require('express');

const router = express.Router();
const customerInfo = require('./postCustomer');
const availableTime = require('./availableTime');
const getReservationData = require('./getReservationData');

router.post('/api/questions/user-info', customerInfo);
router.post('/api/availabletime', availableTime);
router.post('/api/getReservationData', getReservationData);
module.exports = router;

const express = require('express');

const router = express.Router();
const customerInfo = require('./postCustomer');
const availableTime = require('./availableTime');

router.post('/api/questions/user-info', customerInfo);
router.post('/api/availabletime', availableTime);
module.exports = router;

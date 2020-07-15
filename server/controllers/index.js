const express = require('express');

const router = express.Router();
const customerInfo = require('./postCustomer');
const timeAvailable = require('./availableTime');

router.post('/api/questions/user-info', customerInfo);
router.get('/api/availabletime/:id', timeAvailable);
module.exports = router;

const express = require('express');

const router = express.Router();
const customerInfo = require('./postCustomer');
const availableTime = require('./availableTime');
const { Error404 } = require('../helpers/errors');
const { Error500 } = require('../helpers/errors');

router.post('/api/questions/user-info', customerInfo);
router.post('/api/availabletime', availableTime);
router.use(Error404);
router.use(Error500);
module.exports = router;

const express = require('express');

const router = express.Router();
const customerInfo = require('./postCustomer');

router.post('/api/questions/user-info', customerInfo);
module.exports = router;

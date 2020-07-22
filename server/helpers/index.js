const nodeMailer = require('./nodeMailer');
const { Error404, Error500 } = require('./errors');
const validation = require('./validation');

module.exports = { nodeMailer, Error404, Error500, validation };

const getTimeSlots = require('../database/queries/getTimeSlots');

module.exports = (req, res) => {
  getTimeSlots()
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => res.status(500).json({ message: err.message }));
};

const availableTime = require('../database/queries/availableTime');

module.exports = (req, res) => {
  const { reservationDate } = req.body;
  availableTime(reservationDate)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => res.status(500).json({ message: err.message }));
};

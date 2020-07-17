const availableTime = require('../database/queries/availableTime');

module.exports = (req, res) => {
  const { reserveDate } = req.body;
  availableTime(reserveDate)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => res.status(500).json({ message: err.message }));
};

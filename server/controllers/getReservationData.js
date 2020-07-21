const getReservationData = require('../database/queries/getReservationData');

module.exports = (req, res) => {
  const data = req.query;
  getReservationData(data)
    .then((result) => res.json(result.rows))
    .catch((err) => res.status(500).json({ message: err.message }));
};

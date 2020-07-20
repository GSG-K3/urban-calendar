const getResrvationData = require('../database/queries/getReservationData');

module.exports = (req, res) => {
  const data = req.body;
  getResrvationData(data)
    .then((result) => res.json(result.rows))
    .catch((err) => res.status(500).json({ message: err.message }));
};

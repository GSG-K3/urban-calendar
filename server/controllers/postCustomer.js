const postCustomer = require('../database/queries/postCustomer');

module.exports = (req, res) => {
  const data = req.body;
  const { fullName, phone, email, zipCode, reservationDate, timeId } = data;
  // check if the all text fields is filled.
  if (!fullName || !phone || !email || !zipCode || !reservationDate || !timeId) {
    // if one of text fields is empty, show this message
    return res.status(400).json({
      message: 'Please make sure that you filled each field properly.',
    });
  }
  // if all text fields is full, add this data to a new row in database and show this message
  postCustomer(data)
    .then((response) => {
      if (response.rowCount === 1) {
        return res.status(200).json({ message: 'user created successfully!' });
      }
    })

    .catch((err) => res.status(500).json({ message: err.message }));
};

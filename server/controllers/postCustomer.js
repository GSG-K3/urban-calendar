const postCustomer = require('../database/queries/postCustomer');
const { nodeMailer, validation } = require('../helpers');

module.exports = (req, res) => {
  const data = req.body;

  // if all text fields is full, add this data to a new row in database and show this message
  const { fullName, email, reservationDate, reservationTime } = data;
  // check if the all text fields is filled.
  validation(data)
    .then((result) => {
      postCustomer(result).then((response) => {
        if (response.rowCount === 1) {
          nodeMailer(fullName, email, reservationDate, reservationTime);
          return res
            .status(200)
            .json({ message: 'user created successfully!' });
        }
      });
    })
    .catch((err) =>
      res.status(400).json({
        message: 'Please make sure that you filled each field properly.',
      }),
    );
};

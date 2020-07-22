const postCustomer = require('../database/queries/postCustomer');
const { nodeMailer, validation } = require('../helpers');
module.exports = (req, res) => {
  const data = req.body;
  const { fullName, email, reservationDate } = data;
  // check if the all text fields is filled.
  validation(data)
    .then((result) => {
      postCustomer(result).then((response) => {
        if (response.rowCount === 1) {
          nodeMailer(fullName, email, reservationDate);
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

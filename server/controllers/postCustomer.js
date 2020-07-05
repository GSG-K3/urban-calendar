const postCustomer = require('../database/queries/postCustomer');

module.exports = (req, res) => {
  const data = req.body;
  const { firstName, lastName, phone, email } = data;

  if (!firstName || !lastName || !phone || !email) {
    return res.status(400).json({
      message: 'There is one item or more missing. Please filled it!',
    });
  }
  postCustomer(data)
    .then((response) => {
      if (response.rowCount === 1) {
        return res.status(200).json({ message: 'user created successfully!' });
      }
    })

    .catch((err) => res.status(500).json({ message: err.message }));
};

// const availableTime = require('../database/queries/availableTime');

// module.exports = (req, res) => {
//   const data = req.body;
//   const { timeDate } = data;

//   if (!timeDate) {
//     return res.status(400).json({
//       message: 'There is one item or more missing. Please filled it!',
//     });
//   }

//   availableTime(data)
//     .then((response) => {
//       if (response.rowCount === 1) {
//         return res.status(200).json({ message: 'successfully!' });
//       }
//     })

//     .catch((err) => res.status(500).json({ message: err.message }));
// };

const availableTime = require('../database/queries/availableTime');

module.exports = (req, res) => {
  const reserveDate = req.body;
  availableTime(reserveDate)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).json({ message: err.message }));
};

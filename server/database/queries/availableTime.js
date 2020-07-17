const dbconnection = require('../dbConnection');

const availableTime = (reservationDate) => {
  const sql = {
    text:
      'SELECT * FROM reservation_time WHERE id NOT IN (SELECT time_id from customer_info where reservation_date = $1)',
    values: [reservationDate],
  };
  return dbconnection.query(sql);
};

module.exports = availableTime;

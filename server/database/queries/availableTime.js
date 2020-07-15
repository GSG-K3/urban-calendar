const dbconnection = require('../dbConnection');
// To get available rooms from rooms table where t's room_id doesn't exist in the result of second query,
// which return available rooms id's that doesn't have an event at this date
const availableTime = (reserveDate) => {
  const sql = {
    text:
      'SELECT * FROM reserve_time WHERE id NOT IN (SELECT time_id from customer_info where reserve_date = $1)',
    values: [reserveDate.reserveDate],
  };
  return dbconnection.query(sql);
};

module.exports = availableTime;

// const dbConnection = require('../dbConnection');

// const availableTime = (data) => {
//   const { reserveDate } = data;
//   const sql = {
//     text: 'INSERT INTO customer_info (reserve_date)  VALUES ($1)',
//     values: [reserveDate],
//   };
//   return dbConnection.query(sql.text, sql.values);
// };

// module.exports = availableTime;

// SELECT REPEAT(reserve_date, 2)
// FROM

// SELECT reserve_date from customer_info (SELECT TO_CHAR(count(reserve_date = $1) As coco , 'MM/DD/YY') ) ;

const dbconnection = require('../dbConnection');

const getTimeSlots = () => {
  const sql = {
    text: 'select * from reservation_time',
  };
  return dbconnection.query(sql);
};

module.exports = getTimeSlots;

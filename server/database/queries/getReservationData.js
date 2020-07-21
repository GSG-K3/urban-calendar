const dbconnection = require('../dbConnection');

const getReservationData = (data) => {
  const { startDate, endDate } = data;
  const sql = {
    text:
      'select customer_info.reservation_date,customer_info.time_id,reservation_time.time_slot from customer_info join reservation_time on (customer_info.time_id=reservation_time.id) WHERE reservation_date >= $1 and reservation_date < $2',
    values: [startDate, endDate],
  };
  return dbconnection.query(sql);
};

module.exports = getReservationData;

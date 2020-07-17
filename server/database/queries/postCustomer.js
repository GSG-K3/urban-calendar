const dbConnection = require('../dbConnection');

const postCustomer = (data) => {
  const { fullName, phone, email, zipCode, reservationDate, timeId } = data;
  const sql = {
    text:
      'INSERT INTO customer_info (full_name,phone,email,zip_code,reservation_date,time_id) VALUES ($1,$2,$3,$4,$5,$6)',
    values: [fullName, phone, email, zipCode, reservationDate, timeId],
  };
  return dbConnection.query(sql.text, sql.values);
};

module.exports = postCustomer;

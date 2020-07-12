const dbConnection = require('../dbConnection');

const postCustomer = (data) => {
  const { fullName, phone, email, zipCode, reserveDate } = data;
  const sql = {
    text:
      'INSERT INTO customer_info (full_name,phone,email,zip_code,reserve_date) VALUES ($1,$2,$3,$4,$5)',
    values: [fullName, phone, email, zipCode, reserveDate],
  };
  return dbConnection.query(sql.text, sql.values);
};

module.exports = postCustomer;

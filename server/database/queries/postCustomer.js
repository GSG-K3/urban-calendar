const dbConnection = require('../dbConnection');

const postCustomer = (data) => {
  const { firstName, lastName, phone, email } = data;
  const sql = {
    text:
      'INSERT INTO customer_info (first_name, last_name,phone,email) VALUES ($1,$2,$3,$4)',
    values: [firstName, lastName, phone, email],
  };
  return dbConnection.query(sql.text, sql.values);
};

module.exports = postCustomer;

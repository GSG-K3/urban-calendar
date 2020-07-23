const fs = require('fs');
const { join } = require('path');
const connection = require('./dbConnection');

const sql = fs.readFileSync(join(__dirname, 'dbBuild.sql')).toString();
const sql2 = fs.readFileSync(join(__dirname, 'dummyData.sql')).toString();

const runDbBuild = (sql, sql2) =>
  connection
    .query(sql)
    .then((res) => {
      connection.query(sql2).then((result) => result);
    })
    .catch((err) => err);

runDbBuild(sql, sql2);

module.exports = runDbBuild;

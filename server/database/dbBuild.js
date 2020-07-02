const fs = require("fs");
const {join} = require("path");
const connection = require("./dbConnection");

const sql = fs
  .readFileSync(join(__dirname,"dbBuild.sql"))
  .toString();

connection
  .query(sql)
  .then((data) => console.log("dataBase has been created"))
  .catch((err) => console.log(err));

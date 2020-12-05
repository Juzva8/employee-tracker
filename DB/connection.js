var mysql = require("mysql");
const util = require("util")
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Admin124!",
    database: "employee_DB"
});

connection.connect();

connection.query = util.promisify(connection.query)
module.exports = connection
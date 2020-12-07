const connection = require("./connection");

class db {
    constructor(connection) {
        this.connection = connection;
    }

    employees() {
        return this.connection.query("SELECT employees.first_name, employees.last_name, employees.category, employees.department_id FROM employees")


    }
    createEmployees() {
        console.log("Inserting a new employees...\n");
        return this.connection.query(
            "INSERT INTO employees SET ?", employees

        );
    }
    role() {
        return this.connection.query("SELECT role.title, role.salary, role.category, role.role_id, role.manager_id FROM role")


    }
    createRole() {
        console.log("Inserting a new role...\n");
        return this.connection.query(
            "INSERT INTO role SET ?", role

        );
    }
    department() {
        return this.connection.query("SELECT department.name FROM department")

    }
    createdepartment() {
        console.log("Inserting a new department...\n");
        return this.connection.query(
            "INSERT INTO role SET ?", department

        );
    }
}
module.exports = new db(connection)
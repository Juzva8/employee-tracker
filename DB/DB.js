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
    roles() {
        return this.connection.query("SELECT roles.title, roles.salary, roles.category, roles.role_id, roles.manager_id FROM role")


    }
    createRoles() {
        console.log("Inserting a new roles...\n");
        return this.connection.query(
            "INSERT INTO roles SET ?", roles

        );
    }
    department() {
        return this.connection.query("SELECT department.name FROM department")


    }
    createdepartment() {
        console.log("Inserting a new department...\n");
        return this.connection.query(
            "INSERT INTO roles SET ?", department

        );
    }
}
module.exports = new db(connection)
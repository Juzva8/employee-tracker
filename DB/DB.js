const connection = require("./connection");

class db {
    constructor(connection) {
        this.connection = connection;
    }

    employees() {
        return this.connection.query("SELECT employees.first_name, employees.last_name, employees.role_id, employees.manager_id FROM employees")


    }
    createemployees() {
        console.log("Inserting a new employees...\n");
        return this.connection.query(
            "INSERT INTO employees SET ?", employees

        );
    }
    role() {
        return this.connection.query("SELECT role.title, role.salary, role.department_id  FROM role")


    }
    createRole() {
        console.log("Inserting a new role...\n");
        return this.connection.query(
            "INSERT INTO role SET ?", role

        );
    }

    updateRole() {

        console.log("Inserting a new role...\n");
        return this.connection.query(
            "UPDATE INTO role SET ?", {
                role_id: role
            },

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
    updateRole(employees, role_id) {
        return this.connection.query(
            "UPDATE employees SET role_id = ? WHERE id = ?", [role_id, employees]
        );
    }

}
module.exports = new db(connection)
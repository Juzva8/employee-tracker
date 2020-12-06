const connection = require("./connection");

class db {
    constructor(connection) {
        this.connection = connection;
    }

    emploees() {
        return this.connection.query("SELECT employee.first_name, employee.last_name, employee.category, employee.department_id")


    }
    createEmploees() {
        console.log("Inserting a new employee...\n");
        return this.connection.query(
            "INSERT INTO employee SET ?", employee

        );
    }
    roles() {
        return this.connection.query("SELECT roles.title, roles.salary, roles.category, roles.role_id, roles.manager_id")


    }
    createRoles() {
        console.log("Inserting a new roles...\n");
        return this.connection.query(
            "INSERT INTO roles SET ?", roles

        );
    }
    department() {
        return this.connection.query("SELECT department.name")


    }
    createdepartment() {
        console.log("Inserting a new department...\n");
        return this.connection.query(
            "INSERT INTO roles SET ?", department

        );
    }
}
module.exports = new db(connection)
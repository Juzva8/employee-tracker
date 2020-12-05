var mysql = require("mysql");
var inquirer = require("inquirer");
var db = require("./DB/DB");
require("console.table");

start()


function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [

                {
                    name: "Add departments",
                    value: "departments"
                },

                {
                    name: "Add roles",
                    value: "roles"
                },

                {
                    name: "Add employees",
                    value: "employees"
                },
                {
                    name: "View departments",
                    value: "view_departments"
                },

                {
                    name: "View roles",
                    value: "view_roles"
                },
                {
                    name: "View employees",
                    value: "view_employees"
                },

                {
                    name: "Update employee roles",
                    value: "update_roles"
                }

            ]
        })

    .then(function(answer) {
        switch (answer.action) {
            case "departments":
                addDepartments();
                break;

            case "roles":
                addRoles();
                break;

            case "employees":
                addEmployees();
                break;

            case "View_departments":
                viewDepartments();
                break;

            case "view_roles":
                viewRoles();
                break;


            case "view_employees":
                viewEmployees();
                break;


            case "update_roles":
                updateRoles();
                break;

            case "exit":
                connection.end();
                break;
        }
    });

    function viewEmployees() {
        const roles = db.roles()
        console.table(roles)

    }

    function viewRoles() {
        const employees = db.emploees()
        console.table(employees)

    }

}

function viewDepartments() {
    const department = db.department()
    console.table(department)

}
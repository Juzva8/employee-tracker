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
                },
                {
                    name: "Exit",
                    value: "exit"
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

}

function viewDepartments() {
    const department = db.department()
    console.table(department)
}


function viewRoles() {
    const roles = db.roles()
    console.table(roles)

}

function viewEmployees() {
    const employees = db.emploees()
    console.table(employees)

}

function addDepartments() {
    inquirer
        .prompt([{
            name: "DepartmentName",
            type: "input",
            message: "What is the Department Name that you would like to add?"
        }, ])
        .then(function(answer) {

            connection.query(
                "INSERT INTO department SET ?", {
                    department: answer.DepartmentName,

                },
                function(err) {
                    if (err) throw err;
                    console.log("Your Department was created successfully!");
                    start();
                }
            );
        });
}

function addRoles() {
    inquirer
        .prompt([{
                name: "Title",
                type: "input",
                message: "What is the title you would like to add?"
            },

            {
                name: "Salary",
                type: "input",
                message: "What is the salary?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }, {
                name: "category",
                type: "input",
                message: "What category would you like to place it in?"
            },
            {
                name: "role_id",
                type: "input",
                message: "What is it's role id?"
            },
            {
                name: "manager_id",
                type: "input",
                message: "What is it's manager's id?"
            },
        ])
        .then(function(answer) {
            connection.query(
                "INSERT INTO auctions SET ?", {
                    title: answer.title,
                    salary: answer.salary,
                    category: answer.category,
                    role_id: answer.role_id,
                    manager_id: answer.manager_id
                },
                function(err) {
                    if (err) throw err;
                    console.log("Role was created successfully!");
                    start();
                }
            );
        });
}

function addEmployees() {
    inquirer
        .prompt([{
                name: "first_name",
                type: "input",
                message: "What is the first name of your new employee?"
            },

            {
                name: "last_name",
                type: "input",
                message: "What is the last name of your new employee?"
            },

            {
                name: "category",
                type: "input",
                message: "What category would you like to place it in?"
            },
            {
                name: "category",
                type: "input",
                message: "What is it's category?"
            },
            {
                name: "department_id",
                type: "input",
                message: "What is it's department id?"
            },
        ])
        .then(function(answer) {
            connection.query(
                "INSERT INTO auctions SET ?", {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    category: answer.category,
                    department_id: answer.department_id,
                },
                function(err) {
                    if (err) throw err;
                    console.log("Employee was added successfully!");
                    start();
                }
            );
        });
}
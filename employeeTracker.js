var mysql = require("mysql");
var { prompt } = require("inquirer");
var inquirer = require("inquirer");
var db = require("./DB/DB");
var connection = require("./DB/connection");
require("console.table");

start()

async function start() {
    const { answer } = await prompt([{
        name: "answer",
        type: "list",
        message: "What would you like to do?",
        choices: [

            {
                name: "Add department",
                value: "department"
            },

            {
                name: "Add role",
                value: "role"
            },

            {
                name: "Add employees",
                value: "employees"
            },
            {
                name: "View department",
                value: "viewDepartment"
            },

            {
                name: "View role",
                value: "view_role"
            },
            {
                name: "View employees",
                value: "view_employees"
            },

            {
                name: "Update employees role",
                value: "update_role"
            },
            {
                name: "Exit",
                value: "exit"
            }

        ]
    }])

    switch (answer) {
        case "department":
            return addDepartment();


        case "role":
            return addRole();


        case "employees":
            return addemployees();


        case "viewDepartment":
            return viewDepartment();


        case "view_role":
            return viewRole();



        case "view_employees":
            return viewemployees();



        case "update_role":
            return updateRole();


        case "exit":
            connection.end();
            break;
    }
};

async function viewRole() {

    const role = await db.role()
    console.log("\n")
    console.table(role)
    start()

}

async function viewDepartment() {
    const department = await db.department()
    console.log("\n")
    console.log(department)
    start()
}

async function viewemployees() {

    const employees = await db.employees()
    console.log("\n")
    console.table(employees)
    start()
}

function addDepartment() {
    inquirer
        .prompt([{
                name: "departmentName",
                type: "input",
                message: "What is the Department Name that you would like to add?"
            },

        ])
        .then(function(answer) {
            connection.query(
                "INSERT INTO department SET ?", {
                    name: answer.departmentName,
                },
                function(err) {
                    if (err) throw err;
                    console.log("Your Department was created successfully!");
                    start();
                }
            );
        });
}

function addRole() {
    inquirer
        .prompt([{
                name: "title",
                type: "input",
                message: "What is the title you would like to add?"
            },

            {
                name: "salary",
                type: "input",
                message: "What is the salary?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "department_id",
                type: "input",
                message: "What is it's department id?"
            },
        ])
        .then(function(answer) {
            connection.query(
                "INSERT INTO role SET ?", {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: answer.department_id
                },
                function(err) {
                    if (err) throw err;
                    console.log("Role was created successfully!");
                    start();
                }
            );
        });
}
async function addemployees() {
    inquirer
        .prompt([{
                name: "first_name",
                type: "input",
                message: "What is the first name of your new employees?"
            },

            {
                name: "last_name",
                type: "input",
                message: "What is the last name of your new employees?"
            },

            {
                name: "role_id",
                type: "input",
                message: "What role id would you like to put it in?"
            },
            {
                name: "manager_id",
                type: "input",
                message: "What is it's department id?"
            },
        ])
        .then(function(answer) {
            connection.query(
                "INSERT INTO employees SET ?", {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id,
                    manager_id: answer.manager_id
                },
                function(err) {
                    if (err) throw err;
                    console.log("employees was added successfully!");
                    start();
                }
            );
        });
}

async function updateRole() {

    var employees = await db.employees()
    var employeeList = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name, last_name }`,
        value: id
    }))
    var { employeeId } = await prompt([{
        type: "list",
        name: "employeeId",
        message: "Which employee's role would you like to update?",
        choices: employeeList
    }]);

    var roleList = await db.role();

    var roleChoices = roleList.map(({ id, title }) => ({
        name: title,
        value: id
    }));

    var { role_id } = await prompt([{
        type: "list",
        name: "role_id",
        message: "Which role do you want to assign the selected employee?",
        choices: roleChoices
    }]);
    await db.updateRole(employeeId, role_id);

    console.log("Updated employee's role");

    start();
}
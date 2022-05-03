const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer')
const cTable = require('console.table')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'company_db'
    },
    console.log(``)
);

function begin() {
    inquirer.prompt({
            name: 'start',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department'
            ]
        })
        .then((selected) => {
            switch (selected.begin) {
                case 'View All Employees':
                    viewAllEmployees()
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployee();
                    break;
                case 'View All Roles':
                    viewAllRoles()
                    break;
                case 'Add Role':
                    addRole()
                    break;
                case 'View All Departments':
                    viewAllDepartments()
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
            }
        })
}

const viewAllEmployees = () => {
    db.query()
}
const addEmployee = () => {
    inquirer.prompt([{
            type: 'input',
            message: "What is employees first name?",
            name: 'firtsName',
        },
        {
            type: 'list',
            message: "What is their role?",
            name: 'roles',
            choices: []
        },
        {
            type: 'input',
            message: "What is employees first name?",
            name: 'firtsName',
        }
    ])
}

const updateEmployee = () => {
    inquirer.prompt([{
            type: 'list',
            message: "Who would you like to update?",
            name: 'people',
            choices: []

        },
        {
            type: 'list',
            message: "What is their new role?",
            name: 'roles',
            choices: []
        }
    ])
}

const viewAllRoles = () => {
    db.query()
}

const addRole = () => {
    inquirer.prompt([{
            type: 'input',
            message: "What is the title?",
            name: 'title',
        },
        {
            type: 'input',
            message: "What is the salary?",
            name: 'salary',
        },
        {
            type: 'list',
            message: "What is the department?",
            name: 'departid',
            choices: []
        },
        {
            type: 'input',
            message: "",
            name: '',
        }

    ])

}

const viewAllDepartments = () => {
    db.query()
}

const addDepartment = () => {
    inquirer.prompt([{
        type: 'input',
        message: "What",
        name: 'What department do you want to add?',

    }])

}





app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
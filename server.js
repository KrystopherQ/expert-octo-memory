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
            message: "",
            name: '',
        },
        {
            type: 'input',
            message: "",
            name: '',
        },
        {
            type: 'input',
            message: "",
            name: '',
        },
        {
            type: 'input',
            message: "",
            name: '',
        }
    ])
}

const updateEmployee = () => {
    inquirer.prompt([{
            type: 'input',
            message: "",
            name: '',

        },
        {
            type: 'input',
            message: "",
            name: '',
        },
        {
            type: 'input',
            message: "",
            name: '',
        },
        {
            type: 'input',
            message: "",
            name: '',
        },

    ])
}

const viewAllRoles = () => {
    db.query()
}

const addRole = () => {
    inquirer.prompt([{
            type: 'input',
            message: "",
            name: '',
        },
        {
            type: 'input',
            message: "",
            name: '',
        },
        {
            type: 'input',
            message: "",
            name: '',
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
            message: "",
            name: '',

        },
        {
            type: 'input',
            message: "",
            name: '',
        },
        {
            type: 'input',
            message: "",
            name: '',
        },
        {
            type: 'input',
            message: "",
            name: '',
        },

    ])

}





app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
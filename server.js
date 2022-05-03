const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer')
const cTable = require('console.table')
    // const PORT = process.env.PORT || 3001;
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

function start() {
    begin();
}

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
    db.query(``, (err, res) => {
        if (err) {
            console.log(err);
        }
        cTable(res)
        begin();
    })
}
const addEmployee = () => {
    employeeSearch()
    roleSearch()
    inquirer.prompt([{
                type: 'input',
                message: "What is employees first name?",
                name: 'firtsName',
            },
            {
                type: 'input',
                message: "What is employees last name?",
                name: 'lastName',
            },
            {
                type: 'rawlist',
                message: "What is their role?",
                name: 'roles',
                choices: () => {
                    employeeObj.push('null');
                    const list = [];
                    for (var i = 0; i < employeeObj.length; i++) {
                        list.push(employeeObj[i]);
                    }
                    return list;
                }
            }
        ])
        .then((answ) => {
            const role_id = idSearch(answ.role, roleObj);
            const manager_id = idSearch(answ.manager, employeeObj);
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)`, [answ.first_name, answ.last_name, role_id, manager_id], (err, res) => {
                if (err) {
                    console.log(err);
                }
                begin();
            })
        })
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
    db.query(`SELECT roles.id AS 'ID', roles.title AS 'Title', department.department_name AS 'Department', roles.salary AS 'Salary' FROM department INNER JOIN roles ON department.id = roles.department_id`, (err, res) => {
        if (err) {
            console.log(err);
        }
        cTable(res)
        begin();
    })
}

const addRole = () => {
    db.query(`SELECT * FROM department`, (err, res) => {
        if (err) {
            console.log(err);
        }
    })
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
                type: 'rawlist',
                message: "What is the department?",
                name: 'departid',
                choices: () => {
                    const list = [];
                    for (let i = 0; i < res.length; i++) {
                        list.push(res[i].name);
                    }
                    return list;
                }
            }
        ])
        .then((answ) => {
            const depart_id = idSearch(answ.department_name, res);
            db.query(`INSERT INTO roles(title, salary, department_id)`, [answ.title, answ.salary, depart_id], (err, res) => {
                if (err) {
                    console.log(err);
                }
            })
        })

}

const viewAllDepartments = () => {
    db.query(`SELECT id AS 'ID' ,department.name AS 'Department' FROM department`, (err, res) => {
        if (err) {
            console.log(err);
        }
        cTable(res)
        begin();
    })
}

const addDepartment = () => {
    inquirer.prompt([{
            type: 'input',
            message: "What",
            name: 'What department do you want to add?',
        }])
        .then((input) => {
            db.query(`INSERT INTO department(name)`, input.name, (err, res) => {
                if (err) {
                    console.log(err);
                }
                begin();
            })
        })

}


const idSearch = (name, idArray) => {
    for (let i = 0; i < idArray.length; i++) {
        if (name === idArray[i].name) {
            return idArray[i].id;
        }
    }
}
const roleSearch = () => {
    db.query(`SELECT id, title AS 'name' FROM role`,
        function(err, res) {
            if (err) {
                console.log(err);
            }
            for (let i = 0; i < res.length; i++) {
                roleObj.push(res[i]);
            }
            return roleObj;
        });
}
const employeeSearch = () => {
    db.query(`SELECT id, CONCAT(first_name, ' ', last_name) AS 'name' FROM employee`, function(err, res) {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < res.length; i++) {
            employeeObj.push(res[i]);
        }
        return employeeObj;
    });
}


app.use((req, res) => {
    res.status(404).end();
});

start()
    // app.listen(PORT, () => {
    //     console.log(`Server running on port ${PORT}`);
    // });
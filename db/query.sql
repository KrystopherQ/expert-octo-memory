SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.department_name

FROM employee
JOIN roles ON employee.role_id = roles_id
JOIN department ON roles.department_id = department.id;

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

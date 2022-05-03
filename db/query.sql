SELECT employee.first_name, employee.last_name, roles.title, department.department_name
FROM employee
JOIN roles ON employee.role_id = roles_id
JOIN department ON roles.department_id = department.id;
SELECT employee.first_name, employee.last_name, roles.title, department.department_name 
FROM employee
JOIN roles department ON employee.role_id=roles_id AND roles.department_id=department_id;
SELECT department_name 
FROM department;
SELECT department_name 
FROM department
INNER JOIN roles ON roles.department_id=department.id;
SELECT roles.id, roles.title, roles.salary
FROM roles
INNER JOIN department ON department.id = roles.department.id;


-- SELECT * FROM department;
-- SELECT * FROM roles;
-- SELECT * FROM employee;

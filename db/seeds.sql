USE company_db;
INSERT INTO department (department_name)
VALUES ("Management"),
       ("QA"),
       ("DevOps");


INSERT INTO roles (title, salary, department_id)
VALUES ("Staff Software Engineering Manager", 150000, 1),
       ("Quality Assurance Engineer", 90000, 2),
       ("Evangelist", 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Carol", 'Shelby', 1, 1),
       ("Ken", 'Miles', 2, NULL),
       ("Leo", 'Beebe', 3, NULL);


-- SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.department_name

-- FROM employee
-- JOIN roles ON employee.role_id = roles_id
-- JOIN department ON roles.department_id = department.id



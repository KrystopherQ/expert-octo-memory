USE company_db;
INSERT INTO department  (department_name, id)
VALUES ("Management", 1),
       ("QA", 2),
       ("DevOps", 3),


INSERT INTO roles (title, salary, department_id)
VALUES ("Staff Software Engineering Manager", 150000, 1),
       ("Quality Assurance Engineer", 90000, 2),
       ("Evangelist", 100000, 3),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Carol", 'Shelby', 1, NULL),
       ("Ken", 'Miles', 2, 1),
       ("Leo", 'Beebe', 3, 1),


SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.department_name

FROM employee
JOIN roles ON employee.role_id = roles_id
JOIN department ON roles.department_id = department.id



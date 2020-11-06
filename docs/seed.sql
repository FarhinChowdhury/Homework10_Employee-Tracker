
INSERT INTO department (id, deptartment_name)
VALUES (1, "Project Management");
INSERT INTO department (id, deptartment_name)
VALUES (2, "Sales");
INSERT INTO department (id, deptartment_name)
VALUES (3, "IT");
INSERT INTO department (id, deptartment_name)
VALUES (4, "Human Resources");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Jr Project Manager", 50.5, 1);
INSERT INTO roles (id, title, salary, department_id)
VALUES (2, "Sr Project Manager", 60.7, 1);
INSERT INTO roles (id, title, salary, department_id)
VALUES (3, "Jr Sales Rep", 65.5, 2);
INSERT INTO roles (id, title, salary, department_id)
VALUES (4, "Sales Manager", 80.2, 2);
INSERT INTO roles (id, title, salary, department_id)
VALUES (5, "Software Developer", 71.2, 3);
INSERT INTO roles (id, title, salary, department_id)
VALUES (6, "Sr Software Developer", 95.2, 3);
INSERT INTO roles (id, title, salary, department_id)
VALUES (7, "Recruiter", 60.5, 4);
INSERT INTO roles (id, title, salary, department_id)
VALUES (8, "HR Manager", 70.5, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Farhin", "Chowdhury", 1, 1);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Elwin", "Doe", 1, 1);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Taylor", "Swift", 2, 2);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Anil", "Wasif", 3, 3);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Bryan", "Adams", 4, 4);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Nick", "Cage", 8, 8);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Armie", "Hammer", 7, 7);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Jim", "Halpert", 1, 3);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Jim", "Halpert", 1, 3);
INSERT INTO  department (dpt_name) -- department name
VALUES

('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO position (title, salary, dpt_id)
VALUES
('Sales Lead', 120000, 1),
('Salesperson', 75000, 1),
('Lead Engineer', 170000, 2),
('Design Engineer', 140000, 2),
('Account Manager', 150000, 3),
('Accountant', 110000, 3),
('Legal Team Lead', 200000, 4),
('Lawyer', 175000, 4);

INSERT INTO employee (first_name, last_name, position_id, manager_id)
VALUES
('Bob', 'Criner', 1, Null),
('Bill', 'Downs', 2, 1),
('Mike', 'Lyons', 3, Null),
('Ryan', 'Garcia', 4, 3),
('Ana', 'Robinson', 5, Null),
('Tim', 'Hue', 6, 5),
('Teresa', 'Flynn', 7, Null),
('Jamie', 'Jones', 8, 7),
('Megan', 'Mack', 4, 3);

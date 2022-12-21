SELECT
    employee.id,
    employee.first_name,
    employee.last_name,
    position.title,
    department.dpt_name AS department,
    position.salary,
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    
FROM 
	employee 
LEFT JOIN 
	position ON employee.position_id = position.id
LEFT JOIN 
	department on position.dpt_id = department.id
LEFT JOIN
	employee manager on manager.id = employee.manager_id;
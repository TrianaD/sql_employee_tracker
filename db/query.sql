SELECT
    id
    dpt_name
    position_id
    title
    salary
    dpt_id
    employee_id
    first_name
    last_name
    position_id
    manager_id

FROM ((department
JOIN position ON dpt_id = position.department_id)
JOIN employee ON position_id = employee.position_id)
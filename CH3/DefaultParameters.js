function employee(empName, employeeSalary, empDepartment = "Anything") {
    console.log(`
Employee Name : ${empName}
Employee Salary : ${employeeSalary}
Employee Department : ${empDepartment}
This employee will be added to the company
`);
}

employee("Mohamed Sayed", 3440)
employee("Mohamed Mohamed", 180000, "CS")

// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.

let employees = [];

function Employee(name, jobTitle, salary, status = "Full Time") {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
}

Employee.prototype.printEmployeeForm = function () {
  console.log(
    `Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`
  );
};

let person1 = new Employee("Sasha Sims", "Caption Editor", "$15/hour");
let person2 = new Employee("Bob the Builder", "Builder", "40,000");
let person3 = new Employee("Aaron Lake", "Application Developer", "$65,000");

// Override the status attribute of one of them
person2.status = "Contract";

// Call the `printEmployeeForm` method for each employee
person1.printEmployeeForm();
person2.printEmployeeForm();
person3.printEmployeeForm();

// Put the generated employees into the `employees` array
employees.push(person1, person2, person3);

console.log(employees);

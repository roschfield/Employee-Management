
// Array to store employees
let employees = [];

// Function to calculate total members
function calculateTotalMembers() {
  document.getElementById("totalMembers").textContent = employees.length;
}

// Function to calculate average salary
function calculateAverageSalary() {
  let totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
  let average = totalSalary / employees.length;
  document.getElementById("averageSalary").textContent =
  average.toFixed(2);
  if (employees.length===0){
    document.getElementById("averageSalary").textContent =0;
  }
}

// Function to add new employee
function addEmployee(id, name, salary, age) {
  employees.push({ id, name, salary, age });
  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployees();
  calculateTotalMembers();
  calculateAverageSalary();
}

// Function to render employees in the table
function renderEmployees(employeesToRender = employees) {
  const tableBody = document.getElementById("employeeTableBody");
  tableBody.innerHTML = "";
  employeesToRender.forEach((employee, index) => {
    let row = `<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.salary}</td>
            <td>${employee.age}</td>
            <td><a href="../employee_details/employee_details.html?id=${index}" class="btn btn-primary btn-sm">Details</a></td>
          </tr>`;
    tableBody.innerHTML += row;
  });
}

// Function to search employees by name
function searchEmployees() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchValue)
  );
  renderEmployees(filteredEmployees);
}

// Function to sort employees by salary (ascending)
function sortEmployeesAscending() {
  const sortedEmployees = employees
    .slice()
    .sort((a, b) => a.salary - b.salary);
  renderEmployees(sortedEmployees);
}

// Function to sort employees by salary (descending)
function sortEmployeesDescending() {
  const sortedEmployees = employees
    .slice()
    .sort((a, b) => b.salary - a.salary);
  renderEmployees(sortedEmployees);
}

// Event listeners for search and sort buttons
document
  .getElementById("searchButton")
  .addEventListener("click", searchEmployees);
document
  .getElementById("sortAscending")
  .addEventListener("click", sortEmployeesAscending);
document
  .getElementById("sortDescending")
  .addEventListener("click", sortEmployeesDescending);

// Load employees from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
  const storedEmployees = localStorage.getItem("employees");
  if (storedEmployees) {
    employees = JSON.parse(storedEmployees);
    renderEmployees();
    calculateTotalMembers();
    calculateAverageSalary();
  }
});

// Form submission for adding new employee
document
  .getElementById("addEmployeeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const id = document.getElementById("employeeID").value;
    const name = document.getElementById("employeeName").value;
    const salary = parseFloat(
      document.getElementById("employeeSalary").value
    );
    const age = parseInt(document.getElementById("employeeAge").value);
    addEmployee(id, name, salary, age);
    // Close modal after adding employee
    let modal = new bootstrap.Modal(
      document.getElementById("addEmployeeModal")
    );
    modal.hide();
    // Clear form fields
    document.getElementById("employeeID").value = "";
    document.getElementById("employeeName").value = "";
    document.getElementById("employeeSalary").value = "";
    document.getElementById("employeeAge").value = "";
  });

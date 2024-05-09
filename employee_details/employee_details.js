
// Function to retrieve employee details from localStorage
function getEmployeeDetails() {
  const params = new URLSearchParams(window.location.search);
  const index = parseInt(params.get("id"));
  const storedEmployees = localStorage.getItem("employees");
  if (storedEmployees) {
    const employees = JSON.parse(storedEmployees);
    const employee = employees[index];
    renderEmployeeDetails(employee);
    document
      .getElementById("editEmployee")
      .addEventListener("click", function () {
        populateEditForm(employee);
      });
  }
}

// Function to render employee details on the page
function renderEmployeeDetails(employee) {
  const tableBody = document.getElementById("employeeDetailsBody");
  tableBody.innerHTML = "";
  let row = `<tr><td>ID</td><td>${employee.id}</td></tr>
         <tr><td>Name</td><td>${employee.name}</td></tr>
         <tr><td>Salary</td><td>${employee.salary}</td></tr>
         <tr><td>Age</td><td>${employee.age}</td></tr>`;
  tableBody.innerHTML = row;
}

// Function to populate the edit form with employee details
function populateEditForm(employee) {
  document.getElementById("editEmployeeID").value = employee.id;
  document.getElementById("editEmployeeName").value = employee.name;
  document.getElementById("editEmployeeSalary").value = employee.salary;
  document.getElementById("editEmployeeAge").value = employee.age;
  let modal = new bootstrap.Modal(
    document.getElementById("editEmployeeModal")
  );
  modal.show();
}

// Function to update employee details
function updateEmployeeDetails(event) {
  event.preventDefault();
  const id = document.getElementById("editEmployeeID").value;
  const name = document.getElementById("editEmployeeName").value;
  const salary = parseFloat(
    document.getElementById("editEmployeeSalary").value
  );
  const age = parseInt(document.getElementById("editEmployeeAge").value);
  const params = new URLSearchParams(window.location.search);
  const index = parseInt(params.get("id"));
  const storedEmployees = localStorage.getItem("employees");
  if (storedEmployees) {
    let employees = JSON.parse(storedEmployees);
    employees[index] = { id, name, salary, age };
    localStorage.setItem("employees", JSON.stringify(employees));
    renderEmployeeDetails(employees[index]);
    let modal = new bootstrap.Modal(
      document.getElementById("editEmployeeModal")
    );
    modal.hide();
  }
}

// Function to delete employee
function deleteEmployee() {
  const params = new URLSearchParams(window.location.search);
  const index = parseInt(params.get("id"));
  const storedEmployees = localStorage.getItem("employees");
  if (storedEmployees) {
    let employees = JSON.parse(storedEmployees);
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    window.location.href = "../team/team.html";
  }
}

// Function to load employee details when the page loads
document.addEventListener("DOMContentLoaded", function () {
  getEmployeeDetails();
  document
    .getElementById("deleteEmployee")
    .addEventListener("click", function (event) {
      event.preventDefault();
      deleteEmployee();
    });
  document
    .getElementById("editEmployeeForm")
    .addEventListener("submit", updateEmployeeDetails);
});

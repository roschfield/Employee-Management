
document.addEventListener("DOMContentLoaded", function () {
  // Load existing projects from local storage
  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  // Function to update total projects and total budget
  function updateTotal() {
    document.getElementById("totalProjects").textContent =
      projects.length;

    let totalBudget = projects.reduce(
      (acc, project) => acc + parseInt(project.budget),
      0
    );
    document.getElementById("totalBudget").textContent = totalBudget;
  }

  // Function to render project cards
  function renderProjects() {
    const projectCardsContainer = document.getElementById(
      "projectCardsContainer"
    );
    projectCardsContainer.innerHTML = "";

    projects.forEach((project, index) => {
      const card = `
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">Deadline: ${project.deadline}</p>
          <p class="card-text">Budget: $${project.budget}</p>
          <p class="card-text">Status: ${project.status}</p>
          <button class="btn btn-danger" onclick="deleteProject(${index})">Delete</button>
        </div>
      </div>
    </div>
  `;
      projectCardsContainer.innerHTML += card;
    });

    updateTotal();
  }

  // Function to add new project
  function addProject(name, deadline, budget, status) {
    projects.push({ name, deadline, budget, status });
    localStorage.setItem("projects", JSON.stringify(projects));
    renderProjects();
  }

  // Function to delete project
  window.deleteProject = function (index) {
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
    renderProjects();
  };

  // Event listener for add project form submission
  document
    .getElementById("addProjectForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const projectName = document.getElementById("projectName").value;
      const deadline = document.getElementById("deadline").value;
      const budget = document.getElementById("budget").value;
      const status = document.getElementById("status").value;
      addProject(projectName, deadline, budget, status);
      document.getElementById("addProjectModal").classList.remove("show");
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = "0px";
      document.getElementsByClassName("modal-backdrop")[0].remove();
    });

  renderProjects();
});

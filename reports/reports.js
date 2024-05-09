
// Function to generate random data for demo purposes
function generateRandomData(count) {
  let data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * 100) + 1);
  }
  return data;
}

// Generate progress bars for monthly revenue
function generateProgressBars() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const revenueData = generateRandomData(12);

  const revenueProgressBars = document.getElementById(
    "revenue-progress-bars"
  );

  months.forEach((month, index) => {
    const progress = document.createElement("div");
    progress.classList.add("progress", "mb-3");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("role", "progressbar");
    progressBar.style.width = `${revenueData[index]}%`;
    progressBar.setAttribute("aria-valuenow", revenueData[index]);
    progressBar.setAttribute("aria-valuemin", "0");
    progressBar.setAttribute("aria-valuemax", "100");
    progressBar.textContent = `$${revenueData[index]} (${month})`;

    progress.appendChild(progressBar);
    revenueProgressBars.appendChild(progress);
  });
}

// Generate pie chart for task completion rates
function generatePieChart() {
  const completionData = generateRandomData(5);

  const ctx = document
    .getElementById("completion-chart")
    .getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"],
      datasets: [
        {
          label: "Task Completion Rates",
          data: completionData,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

// Call functions to generate progress bars and pie chart
generateProgressBars();
generatePieChart();

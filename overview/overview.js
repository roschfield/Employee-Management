
var upcomingEvents = [
  { date: "March 30, 2024", time: "12:00 AM", title: "Conference" },
  { date: "April 5, 2024", time: "2:00 PM", title: "Workshop" },
  { date: "April 15, 2024", time: "10:00 AM", title: "Seminar" },
  { date: "April 25, 2024", time: "3:00 PM", title: "Hackathon" },
];

var latestActivities = [
  {
    img: "https://picsum.photos/200",
    date: "2024-03-12",
    time: "10:00 AM",
    title: "Coding Competition",
  },
  {
    img: "https://picsum.photos/200",
    date: "2024-03-02",
    time: "2:00 PM",
    title: "Tech Talk",
  },
  {
    img: "https://picsum.photos/200",
    date: "2024-02-20",
    time: "9:00 AM",
    title: "Project Showcase",
  },
  {
    img: "https://picsum.photos/200",
    date: "2024-02-10",
    time: "4:00 PM",
    title: "Networking Event",
  },
];

// Function to display events or activities
function displayItems(containerId, items, isUpcoming) {
  var container = document.getElementById(containerId);
  container.innerHTML = "";

  items.forEach(function (item) {
    var col = document.createElement("div");
    col.classList.add("col", "mb-2");
    if (!isUpcoming) {
      col.innerHTML = `
    <div style="display: flex; flex-direction: row; align-items: center; background:#fff" class='mb-3 p-3 rounded-5'>
      <img src="${item.img}" alt="Event Image" style="margin-right: 10px; width: 50px; height: 50px;">
      <div>
        <p class="mb-0">${item.date} <small>${item.time}</small></p>
        <h3 class="mb-0">${item.title}</h3>
      </div>
    </div>
  `;
    } else {
      col.innerHTML = `
    <div style="background-color: #fff; " class="rounded mb-3 p-3">
      <p>${item.date}: <small>${item.time}</small></p>
      <h5>${item.title}</h5>
    </div>
  `;
    }
    container.appendChild(col);
  });
}

// Display upcoming events and latest activities
displayItems("upcomingEvents", upcomingEvents, true);
displayItems("latestActivities", latestActivities, false);

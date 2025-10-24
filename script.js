const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

document.getElementById("monthYear").innerText =
  date.toLocaleString("default", { month: "long" }) + " " + year;

const tbody = document.querySelector("#calendar tbody");
let row = document.createElement("tr");

for (let i = 0; i < firstDay; i++) row.appendChild(document.createElement("td"));

for (let day = 1; day <= daysInMonth; day++) {
  const cell = document.createElement("td");
  cell.textContent = day;
  if (day === date.getDate()) cell.classList.add("today");
  row.appendChild(cell);
  if ((firstDay + day) % 7 === 0) {
    tbody.appendChild(row);
    row = document.createElement("tr");
  }
}
tbody.appendChild(row);

const employees = [
  { name: "Huma Zafar", position: "Frontend Developer", team: "Web Development", workMode: "Hybrid", email: "huma.zafar@codeinsights.com", joined: "2022-03-14", status: "Active" },
  { name: "Fatima Qureshi", position: "Backend Developer", team: "Web Development", workMode: "On-site", email: "fatima.qureshi@codeinsights.com", joined: "2021-08-02", status: "Active" },
  { name: "Daniyal Mirza", position: "Cloud Engineer", team: "Cloud Solutions", workMode: "Remote", email: "daniyal.mirza@codeinsights.com", joined: "2022-11-21", status: "Active" },
  { name: "Sana Javed", position: "DevOps Engineer", team: "Cloud Solutions", workMode: "Hybrid", email: "sana.javed@codeinsights.com", joined: "2023-01-09", status: "On leave" },
  { name: "Mehwish Anwar", position: "Data Analyst", team: "Data & Analytics", workMode: "On-site", email: "mehwish.anwar@codeinsights.com", joined: "2021-05-17", status: "Active" },
  { name: "Maryam Iqbal", position: "Data Analyst", team: "Data & Analytics", workMode: "Remote", email: "maryam.iqbal@codeinsights.com", joined: "2024-02-05", status: "Active" },
  { name: "Rayyan Chaudhry", position: "AI Engineer", team: "AI & Automation", workMode: "Remote", email: "rayyan.chaudhry@codeinsights.com", joined: "2023-06-26", status: "Active" },
  { name: "Noor Ul Ain", position: "Automation Specialist", team: "AI & Automation", workMode: "Hybrid", email: "noor.ulain@codeinsights.com", joined: "2022-09-12", status: "Active" },
  { name: "Laiba Rehman", position: "UI/UX Designer", team: "UI/UX Design", workMode: "Remote", email: "laiba.rehman@codeinsights.com", joined: "2021-10-04", status: "Active" },
  { name: "Talha Butt", position: "Cybersecurity Analyst", team: "Cybersecurity", workMode: "On-site", email: "talha.butt@codeinsights.com", joined: "2020-12-01", status: "On leave" },
  { name: "Zoya Farooq", position: "Software Developer", team: "Business Software", workMode: "Hybrid", email: "zoya.farooq@codeinsights.com", joined: "2022-04-18", status: "Active" },
  { name: "Saad Nawaz", position: "API Integration Developer", team: "API & Integration", workMode: "Remote", email: "saad.nawaz@codeinsights.com", joined: "2023-08-07", status: "Active" }
];

const statusBadge = { "Active": "bg-success", "On leave": "bg-warning text-dark" };

const modeBadge = {
  "Remote": "bg-primary-subtle text-primary-emphasis",
  "Hybrid": "bg-info-subtle text-info-emphasis",
  "On-site": "bg-secondary-subtle text-secondary-emphasis"
};

function getInitials(name) {
  return name.split(" ").map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
}

const tableBody = document.getElementById("employeeTable");

employees.forEach(function (emp) {
  const row = document.createElement("tr");
  row.innerHTML =
    "<td><span class='avatar'>" + getInitials(emp.name) + "</span><span class='fw-semibold'>" + emp.name + "</span></td>" +
    "<td>" + emp.position + "</td>" +
    "<td>" + emp.team + "</td>" +
    "<td><span class='badge " + modeBadge[emp.workMode] + "'>" + emp.workMode + "</span></td>" +
    "<td>" + emp.email + "</td>" +
    "<td>" + emp.joined + "</td>" +
    "<td><span class='badge " + statusBadge[emp.status] + "'>" + emp.status + "</span></td>";
  tableBody.appendChild(row);
});

function countBy(field, value) {
  return employees.filter(function (e) { return e[field] === value; }).length;
}

document.getElementById("totalCount").textContent = employees.length;
document.getElementById("activeCount").textContent = countBy("status", "Active");
document.getElementById("remoteCount").textContent = countBy("workMode", "Remote");
document.getElementById("leaveCount").textContent = countBy("status", "On leave");

const projects = [
{id: 1, name: "SEO Audit", price: "RM500"},
{id: 2, name: "Business Website", price: "RM1500"},
{id: 3, name: "Web Application", price: "RM3000"}
];

const tableBody = document.querySelector("#projectTable tbody");
projects.forEach(project => {
  const row = document.createElement("tr");

  row.innerHTML = `
  <td>${project.name}</td>
  <td>${project.price}</td>
  <td>
    <button onclick="scrollToForm()">Request Quote</button>
  </td>
  `;
  tableBody.appendChild(row);
});

function scrollToForm() {
  document.getElementById("quotation").scrollIntoView({behavior:"smooth"});
}

document.getElementById("quotation").addEventListener("submit",function (e) {
  const voucher = document.getElementById("voucher").value;

  if (!voucher.startsWith("DEV")) {
    alert("Invalid Voucher Code");
    e.preventDefault();
  }
});
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modified: ${document.lastModified}`;

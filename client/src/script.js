const togglebtn = document.querySelector("#menu");
const dropdown = document.querySelector("#dropdown-menu");

togglebtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

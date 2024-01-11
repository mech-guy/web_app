document.getElementById("darkModeToggle").addEventListener("change", function() {
  document.body.classList.toggle("dark-mode");
});


function showDetails(element) {
  var details = element.nextElementSibling;
  details.style.display = (details.style.display === "none") ? "block" : "none";
}
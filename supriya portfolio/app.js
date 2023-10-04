// JavaScript code for button animation
const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click", function() {
  contactButton.style.transform = "scale(1.1)";
  setTimeout(function() {
    contactButton.style.transform = "scale(1)";
  }, 300);
});
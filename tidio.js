const mainHead = document.querySelector(".main-head");
const list =document.querySelectorAll(".nav-list-item");

window.addEventListener("scroll", function () {
  if (this.scrollY > 10) {
    mainHead.classList.add("slidedown");
  } else if (this.scrollY == 0) {
    mainHead.classList.remove("slidedown");
  }
});
// window.addEventListener("scroll", function () {
//   if (this.scrollY > 1400) {
//     mainHead.classList.add("slidedown");
//     mainHead.style.background = "#fff";
//   } else if (this.scrollY <= 0) {
//     mainHead.classList.remove("slidedown");
//     mainHead.style.background = "#061533";
//   }
// });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

// Function to handle language selection
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    var selectedLanguage = this.value;
    // Here you can write code to handle the selected language
    console.log("Selected Language:", selectedLanguage);
  });

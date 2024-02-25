// Get the popover parent and popover lang elements
// document.addEventListener("DOMContentLoaded", function () {
//   var popoverParent = document.getElementById("popover-parent");
//   var popoverLang = document.getElementById("popover-lang");
//   var arrowIcon = document.getElementById("arrow-icon");

//   popoverParent.addEventListener("click", function (event) {
//     popoverLang.classList.toggle("show");
//     arrowIcon.classList.toggle("rotate");
//   });

//   // Close the popover when the user clicks outside of it
//   window.addEventListener("click", function (event) {
//     if (!popoverParent.contains(event.target)) {
//       popoverLang.classList.remove("show");
//       arrowIcon.classList.remove("rotate");
//     }
//   });

//   // Set selected popover when clicked
//   var popoverItems = document.querySelectorAll(".popover-hover");
//   popoverItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//       popoverItems.forEach(function (item) {
//         item.classList.remove("selected");
//       });
//       this.classList.add("selected");
//     });
//   });
// });

const circle = document.getElementById("circle");
let rotation = 0;
let lastTime = null;

function rotateCircle(timestamp) {
  if (!lastTime) {
    lastTime = timestamp;
  }
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  rotation += 0.023 * deltaTime; // Adjust rotation speed here
  circle.style.transform = `rotate(${rotation}deg)`; // Apply rotation

  requestAnimationFrame(rotateCircle);
}

requestAnimationFrame(rotateCircle);

import "regenerator-runtime"; /* for async await transpile */
import "../../node_modules/boxicons/css/boxicons.min.css";
import "../styles/main.scss";
import main from "./main.js";

main();
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector("nav");
  const closeIcon = document.querySelector(".bx-x");
  const menuIcon = document.querySelector(".bx-menu");
  const navItems = document.querySelectorAll(".navItem");

  function toggleMenu() {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      nav.classList.add("active");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  menu.addEventListener("click", toggleMenu);

  navItems.forEach(function (navItem) {
    navItem.addEventListener("click", toggleMenu);
  });
});

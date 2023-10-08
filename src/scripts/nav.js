class Navigation {
  constructor() {
    this.menu = document.querySelector(".menu");
    this.nav = document.querySelector("nav");
    this.closeIcon = document.querySelector(".bx-x");
    this.menuIcon = document.querySelector(".bx-menu");
    this.navLinks = document.querySelectorAll("nav ul li a");

    this.menu.addEventListener("click", this.toggleMenu.bind(this));

    this.navLinks.forEach((navLink) => {
      navLink.addEventListener("click", this.toggleMenu.bind(this));
    });

    this.markActiveLink();
  }

  toggleMenu() {
    if (this.nav.classList.contains("drawer")) {
      this.nav.classList.remove("drawer");
      this.closeIcon.style.display = "none";
      this.menuIcon.style.display = "block";
    } else {
      this.nav.classList.add("drawer");
      this.closeIcon.style.display = "block";
      this.menuIcon.style.display = "none";
    }
  }

  markActiveLink() {
    const currentPath = window.location.pathname;
    this.navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
      if (linkPath === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}

export default Navigation;

document.addEventListener("DOMContentLoaded", function () {
  new Navigation();
});

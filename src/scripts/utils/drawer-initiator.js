const DrawerInitiator = {
  init({ button, drawer, content }) {
    const menuIcon = document.querySelector('.bx-menu'); // Ikon menu (hamburger)
    const closeIcon = document.querySelector('.bx-x'); // Ikon close
    const navLinks = document.querySelectorAll('nav ul li a');

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      this._toggleMenuIcons(menuIcon, closeIcon); // Tukar ikon menu dan close
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      this._toggleMenuIcons(menuIcon, closeIcon); // Tukar ikon menu dan close
    });

    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
        this._toggleMenuIcons(menuIcon, closeIcon); // Tukar ikon menu dan close
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('drawer');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('drawer');
  },

  _toggleMenuIcons(menuIcon, closeIcon) {
    if (menuIcon.style.display === 'none') {
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    } else {
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    }
  },
};

export default DrawerInitiator;

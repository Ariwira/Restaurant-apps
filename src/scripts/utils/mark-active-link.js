import UrlParser from '../routes/url-parser';
import DrawerInitiator from './drawer-initiator';

function markActiveLink() {
  const currentPath = UrlParser.parseActiveUrlWithCombiner();
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute('href');
    if (linkPath === `#${currentPath}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', DrawerInitiator);
  markActiveLink();
});

window.addEventListener('hashchange', () => {
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', DrawerInitiator);
  markActiveLink();
});

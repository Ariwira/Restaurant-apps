/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import 'boxicons/css/boxicons.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/main.scss';
import '../styles/responsive.scss';
import 'animate.css';
import AOS from 'aos';
import App from './views/app';
import 'aos/dist/aos.css';
import './utils/mark-active-link';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

AOS.init();

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main'),
});

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');

  const hasPreloaderBeenShown = sessionStorage.getItem('preloaderShown');

  if (!hasPreloaderBeenShown) {
    setTimeout(() => {
      preloader.style.display = 'none';
      sessionStorage.setItem('preloaderShown', 'true');
    }, 2000);
  } else {
    preloader.style.display = 'none';
  }
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

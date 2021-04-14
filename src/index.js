import homePageLoad from './modules/init-page-load.js';
import menuLoad from './modules/menu.js';
import contactLoad from './modules/contact.js';

function navEvents() {
    var homeBtn = document.getElementById('home');
    var menuBtn = document.getElementById('menu');
    var contactBtn = document.getElementById('contact');

    homeBtn.addEventListener('click', homePageLoad);
    menuBtn.addEventListener('click', menuLoad);
    contactBtn.addEventListener('click', contactLoad);
}

function init() {
    homePageLoad();
    navEvents();
}

init();
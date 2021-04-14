import pageLoad from './modules/init-page-load.js';
import homeLoad from './modules/home.js';
import menuLoad from './modules/menu.js';
import contactLoad from './modules/contact.js';

function navEvents() {
    var homeBtn = document.getElementById('home');
    var menuBtn = document.getElementById('menu');
    var contactBtn = document.getElementById('contact');

    homeBtn.addEventListener('click', homeLoad);
    menuBtn.addEventListener('click', menuLoad);
    contactBtn.addEventListener('click', contactLoad);
}

function init() {
    pageLoad();
    navEvents();
}

init();
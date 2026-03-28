import './style.css';
import { loadHome } from './home.js';
import { loadNav } from './nav.js';
import { loadContact } from './contact.js';
import { loadMenu } from './menu.js';

function clearScreen() {
    document.getElementById('content').innerHTML = '';
};

function init() {
    loadHome();
    loadNav();
    loadEvents();
}

function loadEvents() {
    const menuBtn = document.querySelector('.menuBtn');
    menuBtn.addEventListener('click', () => {
        clearScreen();
        loadNav();
        loadMenu();
        loadEvents();
    });
    const contactBtn = document.querySelector('.contactBtn');
    contactBtn.addEventListener('click', () => {
        clearScreen();
        loadNav();
        loadContact();
        loadEvents();
    });
    const homeBtn = document.querySelector('.homeBtn');
    homeBtn.addEventListener('click', () => {
        clearScreen();
        loadNav();
        loadHome();
        loadEvents();
    });
};

init();
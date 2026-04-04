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
        loadMenu();
    });
    const contactBtn = document.querySelector('.contactBtn');
    contactBtn.addEventListener('click', () => {
        clearScreen();
        loadContact();
    });
    const homeBtn = document.querySelector('.homeBtn');
    homeBtn.addEventListener('click', () => {
        clearScreen();
        loadHome();
    });
    const btnHero = document.querySelector('.btnHero');
    btnHero.addEventListener('click', () => {
        clearScreen();
        loadMenu();
    })
};

init();
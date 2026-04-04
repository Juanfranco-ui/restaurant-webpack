export function loadNav() {
    const contDiv = document.getElementById('nav');
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    nav.classList.add('navCont');
    home.classList.add('homeBtn');
    home.textContent = 'Home';
    menu.classList.add('menuBtn');
    menu.textContent = 'Menu';
    contact.classList.add('contactBtn');
    contact.textContent = 'Contact';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    contDiv.appendChild(nav);
};
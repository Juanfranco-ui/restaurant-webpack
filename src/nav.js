export function loadNav() {
    const contDiv = document.getElementById('content');
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    home.className = 'homeBtn';
    home.textContent = 'Home';
    menu.className = 'menuBtn';
    menu.textContent = 'Menu';
    contact.className = 'contactBtn';
    contact.textContent = 'Contact';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    contDiv.appendChild(nav);
};
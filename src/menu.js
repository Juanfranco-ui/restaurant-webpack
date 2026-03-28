export function loadMenu() {
    const contDiv = document.getElementById('content');
    const menuTitle = document.createElement('h1');
    const foodOne = document.createElement('ul');
    const foodTwo = document.createElement('ul');
    menuTitle.className = 'titleMenu';
    menuTitle.textContent = 'Our Menu';
    contDiv.appendChild(menuTitle);
    contDiv.appendChild(foodOne);
    contDiv.appendChild(foodTwo);
}
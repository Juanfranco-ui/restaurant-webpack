export function loadContact() {
    const contDiv = document.getElementById('content');
    const contactTitle = document.createElement('h3');
    const fakeNumber = document.createElement('p');
    const direction = document.createElement('p');
    contactTitle.className = 'titleCont';
    contactTitle.textContent = 'Juan Alvear'
    direction.className = 'directionCont';
    direction.textContent = 'Avenida Siempre Viva 1992';
    fakeNumber.className = 'numCont';
    fakeNumber.textContent = '+54 9 11 6767-5330';
    contDiv.appendChild(contactTitle);
    contDiv.appendChild(fakeNumber);
    contDiv.appendChild(direction);
}
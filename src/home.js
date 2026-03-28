export function loadHome() {
    const contDiv = document.getElementById('content');
    const title = document.createElement('h1');
    const description = document.createElement('p');
    title.className = 'titleHero';
    title.textContent = 'Proyect Restaurant';
    description.className = 'description';
    description.textContent = 'lorem...';
    contDiv.appendChild(title);
    contDiv.appendChild(description);
}
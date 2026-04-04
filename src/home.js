import photoRestaurant from './jason-leung-poI7DelFiVA-unsplash.jpg';
export function loadHome() {
    const contDiv = document.getElementById('content');
    const heroCont = document.createElement('div');
    const heroL = document.createElement('div');
    const heroR = document.createElement('div');
    const title = document.createElement('h1');
    const description = document.createElement('p');
    const img = document.createElement('img');
    const btnHero = document.createElement('button');
    img.src = photoRestaurant;
    heroCont.classList.add('heroCont');
    heroL.classList.add('heroL');
    heroR.classList.add('heroR');
    btnHero.classList.add('btnHero');
    title.className = 'titleHero';
    title.textContent = 'Proyect Restaurant';
    description.className = 'description';
    description.textContent = 'Descubre la mezcla perfecta entre la tradición gastronómica y el minimalismo moderno. Una experiencia culinaria diseñada para todos tus sentidos.';
    btnHero.textContent = 'Ver Nuestro Menú';
    heroL.appendChild(title);
    heroL.appendChild(description);
    heroL.appendChild(btnHero);
    heroR.appendChild(img);
    heroCont.appendChild(heroL);
    heroCont.appendChild(heroR);
    contDiv.appendChild(heroCont);
}
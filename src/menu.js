import imagePizza from './pizza.jpg';
import imageFish from './fish.jpg';
import imageMila from './mila.jpg';

export function loadMenu() {
    const contDiv = document.getElementById('content');
    const menuTitle = document.createElement('h1');
    const foods = document.createElement('div');
    foods.classList.add('menu-grid');
    let menuItems = [
        { title: "Pizza", description: "A pizza is a flat, round piece of dough covered with tomatoes, cheese, and other savoury food, and then baked in an oven.", price: "$12.000", image: imagePizza },
        { title: "Fish & Chips", description: "Fish and chips is a classic British dish featuring battered, deep-fried white fish (commonly cod or haddock) served with thick-cut fried potatoes (chips)", price: "$20.000", image: imageFish },
        { title: "Milanesa Napolitana con Papas Fritas", description: "an iconic Argentine comfort food consisting of a thinly pounded, breaded, and fried steak (or chicken) topped with tomato sauce, ham, and melted mozzarella cheese with fried potatoes (chips)", price: "$24.000", image: imageMila },
    ];
    menuItems.forEach((item) => {
        let card = document.createElement('div');
        card.classList.add('menu-card');

        let cardH2 = document.createElement('h2');
        cardH2.textContent = `${item.title}`;

        let cardParaph = document.createElement('p');
        cardParaph.textContent = `${item.description}`;

        let cardSpan = document.createElement('span');
        cardSpan.textContent = `${item.price}`;

        let cardImage = document.createElement('img');
        cardImage.src = `${item.image}`;

        card.appendChild(cardImage);

        let textCont = document.createElement('div');
        textCont.classList.add('card-text-container');

        textCont.appendChild(cardH2);
        textCont.appendChild(cardParaph);
        textCont.appendChild(cardSpan);
        card.appendChild(textCont);
        foods.appendChild(card);
    });
    menuTitle.className = 'titleMenu';
    menuTitle.textContent = 'Our Menu';
    contDiv.appendChild(menuTitle);
    contDiv.appendChild(foods);
}
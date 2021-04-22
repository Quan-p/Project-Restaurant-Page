function createFood(src, alt, text, desc) {
    var food = document.createElement('div')
    food.classList.add('food');
    
    var img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);

    var description = document.createElement('div');
    description.classList.add('description');

    const foodName = document.createElement('h2')
    foodName.textContent = text;

    const foodDesc = document.createElement('p')
    foodDesc.textContent = desc;

    description.appendChild(foodName);
    description.appendChild(foodDesc);

    food.appendChild(img);
    food.appendChild(description);
    return food;
}


function menuLoad() {
    var mainContent = document.getElementById('tab-content');
    mainContent.textContent = '';

    const menuFoods = [
        createFood(
            'https://i2.wp.com/www.feastofstarlight.com/wp-content/uploads/2015/04/the-lord-of-the-rings-lembas-recipe.jpg?resize=701%2C1024',
            'Lembas Bread',
            'Lembas Bread',
            'Lembas, Elvish waybread. One small bite is enough to fill the stomach of a grown man'
        ),

        createFood(
            'https://i1.wp.com/www.feastofstarlight.com/wp-content/uploads/2015/05/the-lord-of-the-rings-samwise-gamgee-fish-and-chips-recipe-title-2.jpg',
            "Sam's Fish and Chips",
            "Sam's Fish and Chips",
            'Po-ta-toes! Boil them, mash them, stick them in a stew. Lovely big golden chips with a nice piece of fried fish.'
        ),

        createFood(
            'https://i0.wp.com/www.feastofstarlight.com/wp-content/uploads/2015/06/the-lord-of-the-rings-bacon-sausage-tomatoes.jpg',
            'Tomato, Sausages, Nice Crispy Bacon',
            'Tomato, Sausages, Nice Crispy Bacon',
            'Merry: Tomatoes, sausages, nice crispy bacon.'
        ),

        createFood(
            'https://i2.wp.com/www.feastofstarlight.com/wp-content/uploads/2015/05/the-lord-of-the-rings-miruvor-recipe.jpg?resize=692%2C1024',
            'Miruvor',
            'Miruvor',
            'The name miruvor refers to a reviving cordial of the Elves in Rivendell, a liquor with the power to grant renewed vigour and strength. Miruvor was clear and colourless, with a pleasant fragrance.'
        ),

        createFood(
            'https://i1.wp.com/www.feastofstarlight.com/wp-content/uploads/2015/05/the-lord-of-the-rings-orc-vitality-drink-title-1.jpg',
            'Orc Draught',
            'Orc Draught',
            '"Ugluk trust a flask between teeth and poured some burning liquid down his throat: he felt a hot fierce glow flow through him.  The pain in his legs and ankles vanished. He could stand."'
        ),
    ]

    menuFoods.forEach((food) => {
        mainContent.appendChild(food);
    });
    
    setBtnActive('menu');
}

function setBtnActive(id) {
    var activeBtn = document.querySelector('.tabs.active');
    if (activeBtn) activeBtn.classList.remove('active');

    var homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');

}

export default menuLoad;
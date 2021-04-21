function createFood(src, alt, text, desc) {
    var food = document.createElement('div')
    food.classList.add('food');
    
    var img = document.createElement('img');
    img.setAttribute('src'. src);
    img.setAttribute('alt'. alt);

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

    
    
    setBtnActive('menu');
}

function setBtnActive(id) {
    var activeBtn = document.querySelector('.tabs.active');
    if (activeBtn) activeBtn.classList.remove('active');

    var homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');

}

export default menuLoad;
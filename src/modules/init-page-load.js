function createTitle(id, text) {
    var header = document.createElement('header');
    header.setAttribute('id', id);
    var title = document.createElement('h1');
    title.textContent = text;
    header.appendChild(title)
    return header;
}

function createMainImg(src, alt) {
    var mainImg = document.createElement('img');
    mainImg.classList.add('homeFood');
    mainImg.setAttribute('src', src);
    mainImg.setAttribute('alt', alt);
    content.appendChild(mainImg);
    return mainImg;
}

function createSection() {
    var description = document.createElement('section');
    description.classList.add('section');
    
    var title = document.createElement('h2')
    title.classList.add('section-title');
    title.textContent = 'About';

    description.appendChild(title);

    var content = document.createElement('p');
    content.classList.add('section-description');
    content.textContent = 'We offer the best food from all over Middle-Earth, allowing you to escape into the greatest fictional world. Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit.'

    description.appendChild(content);
    
    return description;
}

function tabCreate() {
    var tabs = document.createElement('div');
    tabs.classList.add('tabsy');

    var tabButton = document.createElement('input');
    tabButton.setAttribute('type', 'radio');
    
    var label = document.createElement('label');
    var labelText = document.createTextNode('Tab One');
    label.classList.add('tabButton');
    label.setAttribute('for', 'Tab One');
    label.appendChild(labelText);
    
    tabs.appendChild(label);
    tabs.appendChild(tabButton);
}

function homePageLoad() {
    const content = document.getElementById('content');

    var header = createTitle('header', 'Middle-Earth Dining');
    content.appendChild(header);

    var tabSection = tabCreate();
    content.appendChild(tabSection);

    createMainImg('https://pbs.twimg.com/media/DAuME7uVwAAYBCK.jpg', 'Dining tables with food');

    const aboutSection = createSection();
    content.appendChild(aboutSection);
}
export default homePageLoad;

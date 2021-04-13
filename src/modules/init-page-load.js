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

function tabCreate(id, text) {
    var btn = document.createElement('button');
    btn.setAttribute('id', id);
    var span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tabs');
    return btn;
}

function createNav(id) {
    var nav = document.createElement('nav');
    nav. setAttribute('id', id);

    var homeBtn = tabCreate('home', 'home');
    var menuBtn = tabCreate('menu', 'menu');
    var contactBtn = tabCreate('contact', 'contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function homePageLoad() {
    const content = document.getElementById('content');

    var header = createTitle('header', 'Middle-Earth Dining');
    content.appendChild(header);

    var nav = createNav('nav');
    content.appendChild(nav);

    createMainImg('https://pbs.twimg.com/media/DAuME7uVwAAYBCK.jpg', 'Dining tables with food');

    const aboutSection = createSection();
    content.appendChild(aboutSection);
}
export default homePageLoad;

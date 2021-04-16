function createMainImg(src, alt) {
    var mainImg = document.createElement('img');
    mainImg.setAttribute('id', 'tableImg');
    mainImg.classList.add('homeFood');
    mainImg.setAttribute('src', src);
    mainImg.setAttribute('alt', alt);
    content.appendChild(mainImg);
    return mainImg;
}

function createSection() {
    var description = document.createElement('section');
    description.classList.add('section');
    description.setAttribute('id', 'about-section')
    
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

function setBtnActive(id) {
    var activeBtn = document.querySelector('.tabs.active');
    if (activeBtn) activeBtn.classList.remove('active');

    var homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');

}

function homeLoad() {
    var content = document.getElementById('content');

    createMainImg('https://pbs.twimg.com/media/DAuME7uVwAAYBCK.jpg', 'Dining tables with food');

    const aboutSection = createSection();
    
    setBtnActive('home');

    content.appendChild(aboutSection);
}

export default homeLoad;
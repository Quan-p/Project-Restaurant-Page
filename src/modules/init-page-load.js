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

function homePageLoad() {
    const content = document.getElementById('content');

    var header = createTitle('header', 'Middle-Earth Dining');
    content.appendChild(header);

    createMainImg('https://pbs.twimg.com/media/DAuME7uVwAAYBCK.jpg', 'Dining tables with food');
}
export default homePageLoad;

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

    var header = createTitle('header', 'Fake Restaurant');
    content.appendChild(header);

    createMainImg('/public/images/homePic.jpg', 'Restaurant food table');
}
export default homePageLoad;

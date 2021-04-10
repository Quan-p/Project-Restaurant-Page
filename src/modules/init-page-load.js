function createTitle(id, text) {
    var header = document.createElement('header');
    header.setAttribute('id', id);
    const title = document.createElement('h1');
    title.textContent = text;
    header.appendChild(title)
    return header;
}

function createMainImg() {
    var homePic = document.createElement('img');
    return homePic;
}

function homePageLoad() {
    const content = document.getElementById('content');

    var header = createTitle('header', 'Fake Restaurant');
    //title.appendChild(titleContent);
    content.appendChild(header);

    homePic.src = '/public/images/homePic.jpg';
    content.appendChild(homePic);
    homePic.classList.add("mainImg");
}
export default homePageLoad;

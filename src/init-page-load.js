function createHeader() {
    var main = document.getElementById('content');

    var head = document.createElement('h1');
    var headContent = document.createTextNode('Fake Restaurant');
    head.appendChild(headContent);
    main.appendChild(head);
    return head;
}
var homePic = document.createElement('img');
homePic.src = '/public/images/homePic.jpg';
main.appendChild(homePic);
homePic.classList.add("mainImg");
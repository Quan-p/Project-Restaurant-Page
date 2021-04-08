function createHeader() {
    var head = document.createElement('h1');
    var headContent = document.createTextNode('Fake Restaurant');
    head.appendChild(headContent);
    document.getElementById('content').appendChild(head);
    return head;
}
export default createHeader;

var homePic = document.createElement('img');
homePic.src = '/public/images/homePic.jpg';
document.getElementById('content').appendChild(homePic);
homePic.classList.add("mainImg");
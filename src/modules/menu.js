function menuLoad() {
    var img = document.getElementById('tableImg')
    img.parentNode.removeChild(img);
    var section = document.getElementById('about-section');
    section.parentNode.removeChild(section);
}

export default menuLoad;
function contactLoad() {
    document.getElementById('tabContent').innerHTML = '';

    setBtnActive('contact');

}

function setBtnActive(id) {
    var activeBtn = document.querySelector('.tabs.active');
    if (activeBtn) activeBtn.classList.remove('active');

    var homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

export default contactLoad;
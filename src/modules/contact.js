function infoLoad (id, text) {
    var mainInfo = document.createElement('div');
    mainInfo.classList.add(contactInfo);

    var phone = document.createElement('h3');
    phone.classList.add(contactHeader);
    phone.setAttribute('id', id)

    var address = document.createElement('h4')
    address.classList.add(contactHeader);    
    address.setAttribute('id', id)

    mainInfo.appendChild(phone);
    mainInfo.appendChild(address);
    return mainInfo
}


function contactLoad() {
    var mainContent = document.getElementById('tab-content');

    mainContent.textContent = '';
    
    setBtnActive('contact');
}

function setBtnActive(id) {
    var activeBtn = document.querySelector('.tabs.active');
    if (activeBtn) activeBtn.classList.remove('active');

    var homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

export default contactLoad;
function infoLoad () {
    var mainInfo = document.createElement('div');
    mainInfo.classList.add('contactInfo');

    var phone = document.createElement('h3');
    phone.classList.add('contactHeader');
    phone.textContent = 'Phone'

    var address = document.createElement('h3')
    address.classList.add('contactHeader');    
    address.textContent = 'Address'

    var phoneNum = document.createElement('p');
    phoneNum.classList.add('contact-detail')
    phoneNum.textContent = '111-111-1111'
    var location = document.createElement('p');
    location.classList.add('contact-detail')
    location.textContent = 'Mount Doom'

    phone.appendChild(phoneNum);
    address.appendChild(location);

    mainInfo.appendChild(phone);
    mainInfo.appendChild(address);
    return mainInfo
}


function contactLoad() {
    var mainContent = document.getElementById('tab-content');

    mainContent.textContent = '';
    
    var contactSection = infoLoad();
    mainContent.appendChild(contactSection);

    setBtnActive('contact');
}

function setBtnActive(id) {
    var activeBtn = document.querySelector('.tabs.active');
    if (activeBtn) activeBtn.classList.remove('active');

    var homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

export default contactLoad;
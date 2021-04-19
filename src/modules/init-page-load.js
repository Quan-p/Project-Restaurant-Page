function mainTab(id) {
    var tabContent = document.createElement('main');
    tabContent.classList.add('tabContent');
    tabContent.setAttribute('id', id);
    //document.getElementById('content').appendChild(tabContent);
    return tabContent;
}

function createTitle(id, text) {
    var header = document.createElement('header');
    header.setAttribute('id', id);
    var title = document.createElement('h1');
    title.textContent = text;
    header.appendChild(title)
    return header;
}


function tabCreate(id, text) {
    var btn = document.createElement('button');
    btn.setAttribute('id', id);
    var span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tabs');
    return btn;
}

function createNav(id) {
    var nav = document.createElement('nav');
    nav. setAttribute('id', id);

    var homeBtn = tabCreate('home', 'home');
    var menuBtn = tabCreate('menu', 'menu');
    var contactBtn = tabCreate('contact', 'contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function pageLoad() {
    const content = document.getElementById('content');

    var header = createTitle('header', 'Middle-Earth Dining');
    content.appendChild(header);

    var nav = createNav('nav');
    content.appendChild(nav);
    
    var tabContent = mainTab('tab-content');
    content.appendChild(tabContent);
    
}
export default pageLoad;

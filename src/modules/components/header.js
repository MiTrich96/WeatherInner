import storage from './../storage/storage';
import createPages from './createPages';

let text;

function chooseLanguage() {
    let language = storage.loadFromStorage('language');
    if (language === 'RU' || language === 'BY') {
        text = {
            control: 'Контроль',
            today: 'Погода за сегодня',
            three: 'Прогноз погоды на три дня',
            geo: 'Геолокационные данные'
        }
    }
    else {
        text = {
            control: 'Control',
            today: 'Weather for today',
            three: 'Weather on three days',
            geo: 'Geolocation data'
        }
    }

    return text;
}

function getCurrentTime() {
    const date = new Date();
    const today = document.querySelector('.today_time');
    today.innerHTML = `${String(date.getHours()).length === 1 ? '0' + date.getHours() : date.getHours()}:${String(date.getMinutes()).length === 1 ? '0' + date.getMinutes() : date.getMinutes()}:${String(date.getSeconds()).length === 1 ? '0' + date.getSeconds() : date.getSeconds()}`;
}

let timer;
function setTimer({target}) {
    if (target.classList.contains('today')) {
        setTimeout(() => {
            if (document.querySelector('.today_time') !== null) {
                timer = setInterval(getCurrentTime, 1000);
            }
        }, 500);
    }
    else {
        clearInterval(timer);
    }
}

function createHeader() {
    chooseLanguage();
    let navigationLinks = document.querySelector('.header_menu');
    if (navigationLinks) {
        navigationLinks.parentNode.removeChild(navigationLinks);
        navigationLinks.removeEventListener('click', createPages);
        navigationLinks.removeEventListener('click',setTimer);
    }
    
    const headerWrap = document.querySelector('.application_header');
    const navBlock = document.createElement('ul');
    navBlock.classList.add('header_menu');

    navBlock.innerHTML = `
                <li class="header_item"><button class="header_item_link button control">${text.control}</button></li>
                <li class="header_item"><button class="header_item_link button today">${text.today}</button></li>
                <li class="header_item"><button class="header_item_link button three">${text.three}</button></li>
                <li class="header_item"><button class="header_item_link button geo_button">${text.geo}</button></li>
    `;

    headerWrap.appendChild(navBlock);

    navigationLinks = document.querySelector('.header_menu');
    navigationLinks.addEventListener('click', createPages);
    navigationLinks.addEventListener('click', setTimer);
}

export default createHeader;
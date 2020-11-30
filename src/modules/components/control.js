import storage from './../storage/storage';
import loadApplicationBackground from './loadImage';
import createPages from './createPages';

let text;

function chooseLanguage() {
    let language = storage.loadFromStorage('language');
    let degree = storage.loadFromStorage('degree');

    if (language === 'RU' || language === 'BY') {
        text = {
            language: 'Язык (RU)',
            changeImage: 'Поменять картинку',
            celcium: `Единица измерения (${degree==='ce'?'°C':'°F'})`,
            city: 'Найти населенный пункт',
            search: 'Найти'
        }
    }
    else {
        text = {
            language: 'Language (EN)',
            changeImage: 'Change image',
            celcium: `Unit of temperature (${degree==='ce'?'°C':'°F'})`,
            city: 'Search your city',
            search: 'Search'
        }
    }

    return text;
}

function createBlock() {
    chooseLanguage();
    const pageWrapBlock = document.querySelector('.current_page');
    const inner = document.createElement('div');
    inner.classList.add('application_control');
    inner.classList.add('block');
    inner.innerHTML = `
            <div class="control_inner">
                <div class="control_buttons">
                    <button class="control_button change_language button">${text.language}</button>
                    <button class="control_button change_image button">${text.changeImage}</button>
                    <button class="control_button change_degree button">${text.celcium}</button>
                </div>
                <div class="control_search">
                    <form action="">
                        <input class="search_geo" type="text" placeholder="${text.city}">
                        <input class="search_geo_send button" type="submit" value="${text.search}">
                    </form>
                </div>
            </div>
    `;
    pageWrapBlock.appendChild(inner);
}

function changeLanguage() {
    let language = storage.loadFromStorage('language');
    if (language === 'RU' || language === 'BY') {
        storage.saveToStorage('language', 'EN') 
    }
    else {
        storage.saveToStorage('language','RU') 
    }
    createPages();
}

function changeDegree() {
    let degree = storage.loadFromStorage('degree');
    if (degree === 'ce') {
        storage.saveToStorage('degree','fa');
    }
    else {
        storage.saveToStorage('degree','ce');
    }
    createPages();
}

function changeImage() {
    loadApplicationBackground();
}

function searchLocation() {
    const input = document.querySelector('.search_geo');
    storage.saveToStorage('city', input.value);
    createPages();
}

function createControlPage() {
    let languageButton = document.querySelector('.change_language');                
    if (languageButton) languageButton.removeEventListener('click', changeLanguage);

    let degreeButton = document.querySelector('.change_degree');                
    if (degreeButton) degreeButton.removeEventListener('click', changeDegree);

    let imageButton = document.querySelector('.change_image');                
    if (imageButton) imageButton.removeEventListener('click', changeImage);

    let searchButton = document.querySelector('.search_geo_send');
    if (searchButton) searchButton.removeEventListener('click', searchLocation);

    createBlock();

    imageButton = document.querySelector('.change_image');                
    imageButton.addEventListener('click', changeImage);

    degreeButton = document.querySelector('.change_degree');                
    degreeButton.addEventListener('click', changeDegree);

    languageButton = document.querySelector('.change_language');                
    languageButton.addEventListener('click', changeLanguage);

    searchButton = document.querySelector('.search_geo_send');
    searchButton.addEventListener('click', searchLocation);

}

export default createControlPage;
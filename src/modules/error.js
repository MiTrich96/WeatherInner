import storage from "./storage/storage";

let text;

function choooseLanguage() {
    let language = storage.loadFromStorage('language');
    if (language === 'RU' || language === 'BY') {
        text = {
            title: 'Ваш город не найден'
        }
    }
    else {
        text = {
            title: 'Your city not found'
        }
    }
}

function createBlock() {
    choooseLanguage();
    const pageWrapBlock = document.querySelector('.application_wrap');
    const inner = document.createElement('div');
    inner.classList.add('error_page');
    inner.classList.add('block');
    inner.innerHTML = `${text.title}`;
    pageWrapBlock.appendChild(inner);
}

function destroyPage() {
    const errorBlock = document.querySelector('.error_page');
    errorBlock.parentNode.removeChild(errorBlock);
}

function createPage() {
    createBlock();
    setTimeout(destroyPage,3000);
}

export default createPage;
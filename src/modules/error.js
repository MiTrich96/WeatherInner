import createControlPage from './components/createPages';

function showErrorPage() {
    const appWrap = document.querySelector('.current_page');
    
    const message = document.createElement('div');
    message.classList.add('error_message');
    message.classList.add('block');
    message.innerHTML = "Your city not found";

    appWrap.appendChild(message);
}

function createPage() {
    showErrorPage();

    setTimeout(function() {
        createControlPage();
    },2000);
}

export default createPage;
import  storage from './../storage/storage';
import sendRequest from './../data/queryApi';

function loadApplicationBackground() {
    let currentCountry, country = storage.loadFromStorage('language');
    if (country === 'BY') {
        currentCountry = 'belarus';
    }
    else {
        currentCountry = 'canada';
    }

    const requestUrl = `https://api.unsplash.com/photos/random?query=${currentCountry}&client_id=fAJsvfFwoBMfY8C7PUlHEJ_vbdTjeOTDk6UdhMerMyw`;


    sendRequest('GET', requestUrl)
        .then(data => {
            const appImageWrap = document.querySelector('.current_page');
            appImageWrap.style.backgroundImage = `URL(${data.urls.regular})`;
        })
        .catch(error => console.log(error));
}

export default loadApplicationBackground;
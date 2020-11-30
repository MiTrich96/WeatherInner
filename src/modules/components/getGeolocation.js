import sendRequest from './../data/queryApi';
import storage from './../storage/storage';
import createPages from './createPages';

function loadGeolocation() {    
    const requestUrl = `https://ipinfo.io/json?token=fb63a1a1386560`;

    sendRequest('GET', requestUrl)
        .then(data => {
            storage.createStorage('language', data.country);
            storage.saveToStorage('city', data.city);
            storage.createStorage('degree', 'ce');

            createPages();
        })
        .catch(error => {
            console.log(error);
            storage.createStorage('language', 'RU');
            storage.saveToStorage('city', 'Gomel');
            storage.createStorage('degree', 'ce');

            createPages();
        });
}

export default loadGeolocation;
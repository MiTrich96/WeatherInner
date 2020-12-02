import  storage from './../storage/storage';
import sendRequest from './../data/queryApi';

function loadApplicationBackground() {
    let city = storage.loadFromStorage('city');
    if (city === "Homiel'") city = 'Gomel';
    
    const requestUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=2f32be23bc5245c8bd3febc0a4f03b94&pretty=1&no_annotations=1`;

    sendRequest('GET', requestUrl)
        .then(data => {
            return data.results[0].components.country;
        })
        .then(currentCountry => {
            const requestUrlImage = `https://api.unsplash.com/photos/random?query=${currentCountry}&client_id=fAJsvfFwoBMfY8C7PUlHEJ_vbdTjeOTDk6UdhMerMyw`;
        
            sendRequest('GET', requestUrlImage)
                .then(data => {
                    const appImageWrap = document.querySelector('.application_image');
                    appImageWrap.style.backgroundImage = `URL(${data.urls.regular})`;
                })
                .catch(error => console.log(error));
        })
        .catch(error => {
        });
}

export default loadApplicationBackground;
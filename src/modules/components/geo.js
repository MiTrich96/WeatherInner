import storage from './../storage/storage';
import sendRequest from './../data/queryApi';
import mapboxgl from 'mapbox-gl';

let text;

function chooseLanguage(data) {
    let language = storage.loadFromStorage('language');
    if (language === 'RU' || language === 'BY') {
        text = {
            location: 'Расположение населенного пункта: ',
            coords: `${data.results[data.results.length - 1].bounds.northeast.lat}; ${data.results[data.results.length - 1].bounds.northeast.lng}`
            
        }
    }
    else {
        text = {
            location: 'Location of the city: ',
            coords: `${data.results[data.results.length - 1].bounds.northeast.lat}; ${data.results[data.results.length - 1].bounds.northeast.lng}`
        }
    }

    return text;
}

function createBlock() {
    const pageWrapBlock = document.querySelector('.current_page');
    const inner = document.createElement('div');
    inner.classList.add('application_control');
    inner.classList.add('block');
    inner.innerHTML = `
        <div class="geo block">
            <div class="geo_title">${text.location}</div>
            <div class="geo_coord">${text.coords}</div>
            <div class="geo_map">
                <div id="map"></div>
            </div>
        </div>
    `;
    pageWrapBlock.appendChild(inner);
}

function loadMap(data) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWl0cmljaDk2IiwiYSI6ImNraHp4aDg3ZjBqdXoydW10MmZmbTN3YzYifQ.LK1DYWREy9-6shJT_XXjLw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [data.results[data.results.length - 1].bounds.northeast.lng, data.results[data.results.length - 1].bounds.northeast.lat], 
        zoom: 9 
    });
}

function loadData() {
    let city = storage.loadFromStorage('city');
    if (city === "Homiel'") city = 'Gomel';
    
    const requestUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=2f32be23bc5245c8bd3febc0a4f03b94&pretty=1&no_annotations=1`;

    sendRequest('GET', requestUrl)
        .then(data => {
            chooseLanguage(data);
            createBlock();
            loadMap(data);
        })
        .catch(error => console.log(error));
}

function createGeoPage() {
    loadData();
}

export default createGeoPage;
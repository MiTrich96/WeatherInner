import temperatureImage from './../../images/temperature.png';
import windImage from './../../images/wind.png';
import waterImage from './../../images/water.png';
import umbrellaImage from './../../images/umbrella.png';
import storage from './../storage/storage';
import sendRequest from './../data/queryApi';
import createPageError from './../error';
  
let text;

function chooseLanguage(data) {
    let language = storage.loadFromStorage('language');
    let degree = storage.loadFromStorage('degree');
    let date = new Date();

    if (language === 'RU' || language === 'BY') {
        text = {
            city: `${data.location.name}`,
            country: `${data.location.country}`,
            day: 'Сб 26 сентябрь',
            time: `${String(date.getHours()).length === 1 ? '0' + date.getHours() : date.getHours()}:${String(date.getMinutes()).length === 1 ? '0' + date.getMinutes() : date.getMinutes()}:${String(date.getSeconds()).length === 1 ? '0' + date.getSeconds() : date.getSeconds()}`,
            temperature: 'Ощущаемая температура: ',
            numberDegree: `${degree==='ce'?data.current.temp_c:data.current.temp_f}`,
            degree: `${degree==='ce'?' °C':' °F'}`,
            windTitle: 'Скорость ветра: ',
            wind: `${data.current.wind_kph} км/ч`,
            waterTitle: 'Относительная влажность: ',
            water: `${data.current.humidity} %`
        }
    }
    else {
        text = {
            city: `${data.location.name}`,
            country: `${data.location.country}`,
            day: 'Sa 26 september',
            time: `${String(date.getHours()).length === 1 ? '0' + date.getHours() : date.getHours()}:${String(date.getMinutes()).length === 1 ? '0' + date.getMinutes() : date.getMinutes()}:${String(date.getSeconds()).length === 1 ? '0' + date.getSeconds() : date.getSeconds()}`,
            temperature: 'Perceived temperature: ',
            numberDegree: `${degree==='ce'?data.current.temp_c:data.current.temp_f}`,
            degree: `${degree==='ce'?' °C':' °F'}`,
            windTitle: 'Speed of wind: ',
            wind: `${data.current.wind_kph} km/h`,
            waterTitle: 'Relative humidity: ',
            water: `${data.current.humidity} %`
        }
    }

    return text;
}

function getDate() {
    const date = document.querySelector('.today_date');
    let options = { weekday: 'long'};
    let language = storage.loadFromStorage('language');
    let dayOfWeek;
    let month;
    let day = new Date();

    if (language === 'RU' || language === 'BY') {
        dayOfWeek = new Intl.DateTimeFormat('ru-RU', options).format(day);
        month = day.toLocaleString('ru', {       
            month: 'long'       
          });
    } 
    else {
        dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(day);
        month = day.toLocaleString('en', {       
            month: 'long'       
          });
    }

    date.innerHTML = `${dayOfWeek} ${day.getDate()} ${month}`;
}

function loadTextData() {
    let city = storage.loadFromStorage('city');
    if (city === "Homyel'") city = 'Gomel';

    const requestUrl = `https://api.weatherapi.com/v1/current.json?key=5a1e87cfcc7d4a4b93d120756202611&q=${city}`;

    sendRequest('GET', requestUrl)
        .then(data => {
            chooseLanguage(data);
            createBlock();
            getDate();
        })
        .catch(error => {
            createPageError();
        });
}

function createBlock() {
    const pageWrapBlock = document.querySelector('.current_page');
    const inner = document.createElement('div');
    inner.classList.add('application_control');
    inner.classList.add('block');
    inner.innerHTML = `
        <div class="weather_today block">
            <div class="weather_today_wrap">
                <div class="today_top">
                    <div class="today_city">${text.city}</div>
                    <div class="today_country">${text.country}</div>
                    <div class="today_date">${text.day}</div>
                    <div class="today_time">${text.time}</div>
                </div>
                <div class="today_left">
                    <div class="today_temperature">
                        <img class="today_temperature_image" src="${temperatureImage}" alt="temperature">
                        <div class="today_temperature_value">${text.numberDegree} <span class="degree">${text.degree}</span></div>
                    </div>
                </div>
                <div class="today_right day_stat">
                    <div class="today_apparent">
                        <span class="today_name">${text.temperature}</span>
                        <span class="today_stat apparent">${text.numberDegree} <span class="degree">${text.degree}</span></span>
                        <img class="favicon" src="${umbrellaImage}"/>
                    </div>
                    <div class="today_wind">
                        <span class="today_name">${text.windTitle}</span>
                        <span class="today_stat apparent">${text.wind}</span>
                        <img class="favicon" src="${windImage}"/>
                    </div>
                    <div class="today_water">
                        <span class="today_name">${text.waterTitle}</span>
                        <span class="today_stat apparent">${text.water}</span>
                        <img class="favicon" src="${waterImage}"/>
                    </div>
                </div>
            </div>
        </div>
    `;
    pageWrapBlock.appendChild(inner);
}

function createTodayPage() {
    loadTextData();
}

export default createTodayPage;
import windImage from './../../images/wind.png';
import waterImage from './../../images/water.png';
import umbrellaImage from './../../images/umbrella.png';
import storage from './../storage/storage';
import sendRequest from './../data/queryApi';

let text;

function getAverage(data) {
    const average = {
        days: [],
        degree: [],
        wind: [],
        water: []
    };

    let countDays = 3;
    let sum;
    for (let day = 0;day < countDays;day++) {
        sum = (data[day].temp[0].min.value + data[day].temp[1].max.value) / 2.0;
        average.degree[day] = sum;
        sum = (data[day].humidity[0].min.value + data[day].humidity[1].max.value) / 2.0;
        average.water[day] = sum;
        sum = (data[day].wind_speed[0].min.value + data[day].wind_speed[1].max.value) / 2.0;
        average.wind[day] = sum;
    }

    let options = { weekday: 'long'};
    let language = storage.loadFromStorage('language');

    if (language === 'RU' || language === 'BY') {
        for (let currentDay = 0; currentDay < countDays; currentDay++) {
            let day = new Date();
            day.setDate(day.getDay() + currentDay);
            let dayOfWeek = new Intl.DateTimeFormat('ru-RU', options).format(day);
            average.days[currentDay] = dayOfWeek;
        }
    } 
    else {
        for (let currentDay = 0; currentDay < countDays; currentDay++) {
            let day = new Date();
            day.setDate(day.getDay() + currentDay);
            let dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(day);
            average.days[currentDay] = dayOfWeek;
        }
    }

    return average;
}

function chooseLanguage(average) {
    let language = storage.loadFromStorage('language');

    if (language === 'RU' || language === 'BY') {
        text = {
            title: 'Средние показатели на 3 дня',
            day: [...average.days],
            temperature: 'Ощущаемая температура: ',
            numberDegree: [...average.degree.toFixed(3)],
            degree: '°C',
            windTitle: 'Скорость ветра: ',
            wind: `${[...average.wind.toFixed(3)]} км/ч`,
            waterTitle: 'Относительная влажность: ',
            water: `${[...average.water.toFixed(3)]} %`
        }
    }
    else {
        text = {
            title: 'Average data for 3 days',
            day: [...average.days],
            temperature: 'Perceived temperature: ',
            numberDegree: [...average.degree.toFixed(3)],
            degree: '°C',
            windTitle: 'Speed of wind: ',
            wind: `${[...average.wind.toFixed(3)]} km/h`,
            waterTitle: 'Relative humidity: ',
            water: `${[...average.water.toFixed(3)]} %`
        }
    }

    return text;
}

function getCoordinates() {
    let city = storage.loadFromStorage('city');
    if (city === "Homiel'") city = 'Gomel';
    
    const requestUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=2f32be23bc5245c8bd3febc0a4f03b94&pretty=1&no_annotations=1`;
    let response;
    sendRequest('GET', requestUrl)
        .then(data => {
            response = data;
        })
        .then(() => {
            loadTextData(response);
        })
        .catch(error => {
            storage.saveToStorage('city','Gomel');
        });
}

function loadTextData(result) {
    let city = storage.loadFromStorage('city');
    if (city === "Homyel'") city = 'Gomel';
    const requestUrl = `https://api.climacell.co/v3/weather/forecast/daily?lat=${result.results[result.results.length - 1].bounds.northeast.lat}&lon=${result.results[result.results.length - 1].bounds.northeast.lng}&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=qEplSE2RzKngcBiPOCSCebLFLzMbcLg0`;

    sendRequest('GET', requestUrl)
        .then(data => {
            let average = getAverage(data);
            chooseLanguage(average);
            createBlock();
        })
        .catch(error => {
            storage.saveToStorage('city','Gomel');
            loadTextData();
        });
}

function createItem(number) {
    const block = document.createElement('li');
    block.classList.add('three_wrap_item');
    block.innerHTML = `
            <div class="three_day">${text.day[number]}</div>
            <div class="item_display">
                <div class="today_apparent">
                    <span class="today_name">${text.temperature}</span>
                    <span class="today_stat apparent">${text.numberDegree[number]} <span class="degree">${text.degree}</span></span>
                    <img class="favicon" src="${umbrellaImage}"/>
                </div>
                <div class="today_wind">
                    <span class="today_name">${text.windTitle}</span>
                    <span class="today_stat apparent">${text.wind[number]}</span>
                    <img class="favicon" src="${windImage}"/>
                </div>
                <div class="today_water">
                    <span class="today_name">${text.waterTitle}</span>
                    <span class="today_stat apparent">${text.water[number]}</span>
                    <img class="favicon" src="${waterImage}"/>
                </div>
            </div>
    `;

    return block;
}

function createBlock() {
    const pageWrapBlock = document.querySelector('.current_page');
    const inner = document.createElement('div');
    inner.classList.add('application_control');
    inner.classList.add('block');
    inner.innerHTML = `
        <div class="weather_three">
            <div class="weather_three_top">${text.title}</div>
            <div class="three_wrap day_stat">
                <ul class="three_wrap_list">
                    ${createItem(0)}
                    ${createItem(1)}
                    ${createItem(2)}
                </ul>
            </div>
        </div>
    `;
    pageWrapBlock.appendChild(inner);
}

function createThreePage() {
    getCoordinates();
}

export default createThreePage;
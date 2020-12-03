/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _modules_components_getGeolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/components/getGeolocation */ \"./modules/components/getGeolocation.js\");\n/* harmony import */ var _modules_components_loadImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/components/loadImage */ \"./modules/components/loadImage.js\");\n\n\n\n(0,_modules_components_loadImage__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_components_getGeolocation__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/components/control.js":
/*!***************************************!*\
  !*** ./modules/components/control.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../storage/storage */ \"./modules/storage/storage.js\");\n/* harmony import */ var _loadImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadImage */ \"./modules/components/loadImage.js\");\n/* harmony import */ var _createPages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPages */ \"./modules/components/createPages.js\");\n\n\n\nlet text;\n\nfunction chooseLanguage() {\n  let language = _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.loadFromStorage('language');\n  let degree = _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.loadFromStorage('degree');\n\n  if (language === 'RU' || language === 'BY') {\n    text = {\n      language: 'Язык (RU)',\n      changeImage: 'Поменять картинку',\n      celcium: `Единица измерения (${degree === 'ce' ? '°C' : '°F'})`,\n      city: 'Найти населенный пункт',\n      search: 'Найти'\n    };\n  } else {\n    text = {\n      language: 'Language (EN)',\n      changeImage: 'Change image',\n      celcium: `Unit of temperature (${degree === 'ce' ? '°C' : '°F'})`,\n      city: 'Search your city',\n      search: 'Search'\n    };\n  }\n\n  return text;\n}\n\nfunction createBlock() {\n  chooseLanguage();\n  const pageWrapBlock = document.querySelector('.current_page');\n  const inner = document.createElement('div');\n  inner.classList.add('application_control');\n  inner.classList.add('block');\n  inner.innerHTML = `\n            <div class=\"control_inner\">\n                <div class=\"control_buttons\">\n                    <button class=\"control_button change_language button\">${text.language}</button>\n                    <button class=\"control_button change_image button\">${text.changeImage}</button>\n                    <button class=\"control_button change_degree button\">${text.celcium}</button>\n                </div>\n                <div class=\"control_search\">\n                    <form action=\"\">\n                        <input class=\"search_geo\" type=\"text\" placeholder=\"${text.city}\">\n                        <input class=\"search_geo_send button\" type=\"submit\" value=\"${text.search}\">\n                    </form>\n                </div>\n            </div>\n    `;\n  pageWrapBlock.appendChild(inner);\n}\n\nfunction changeLanguage() {\n  let language = _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.loadFromStorage('language');\n\n  if (language === 'RU' || language === 'BY') {\n    _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.saveToStorage('language', 'EN');\n  } else {\n    _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.saveToStorage('language', 'RU');\n  }\n\n  (0,_createPages__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\nfunction changeDegree() {\n  let degree = _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.loadFromStorage('degree');\n\n  if (degree === 'ce') {\n    _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.saveToStorage('degree', 'fa');\n  } else {\n    _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.saveToStorage('degree', 'ce');\n  }\n\n  (0,_createPages__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\nfunction changeImage() {\n  (0,_loadImage__WEBPACK_IMPORTED_MODULE_1__.default)();\n}\n\nfunction searchLocation() {\n  const input = document.querySelector('.search_geo');\n  _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.saveToStorage('city', input.value);\n  (0,_createPages__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\nfunction createControlPage() {\n  let languageButton = document.querySelector('.change_language');\n  if (languageButton) languageButton.removeEventListener('click', changeLanguage);\n  let degreeButton = document.querySelector('.change_degree');\n  if (degreeButton) degreeButton.removeEventListener('click', changeDegree);\n  let imageButton = document.querySelector('.change_image');\n  if (imageButton) imageButton.removeEventListener('click', changeImage);\n  let searchButton = document.querySelector('.search_geo_send');\n  if (searchButton) searchButton.removeEventListener('click', searchLocation);\n  createBlock();\n  imageButton = document.querySelector('.change_image');\n  imageButton.addEventListener('click', changeImage);\n  degreeButton = document.querySelector('.change_degree');\n  degreeButton.addEventListener('click', changeDegree);\n  languageButton = document.querySelector('.change_language');\n  languageButton.addEventListener('click', changeLanguage);\n  searchButton = document.querySelector('.search_geo_send');\n  searchButton.addEventListener('click', searchLocation);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createControlPage);\n\n//# sourceURL=webpack:///./modules/components/control.js?");

/***/ }),

/***/ "./modules/components/createPages.js":
/*!*******************************************!*\
  !*** ./modules/components/createPages.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ \"./modules/components/control.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ \"./modules/components/today.js\");\n/* harmony import */ var _three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./three */ \"./modules/components/three.js\");\n/* harmony import */ var _geo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geo */ \"./modules/components/geo.js\");\n\n\n\n\n\nfunction destroyPages() {\n  let destroyPageBlock = document.getElementsByClassName('block');\n\n  if (destroyPageBlock) {\n    [...destroyPageBlock].map(page => {\n      page.parentNode.removeChild(page);\n    });\n  }\n}\n\nfunction createPages() {\n  destroyPages();\n  Promise.resolve().then(_control__WEBPACK_IMPORTED_MODULE_0__.default).then(_today__WEBPACK_IMPORTED_MODULE_1__.default).then(_three__WEBPACK_IMPORTED_MODULE_2__.default).then(_geo__WEBPACK_IMPORTED_MODULE_3__.default);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createPages);\n\n//# sourceURL=webpack:///./modules/components/createPages.js?");

/***/ }),

/***/ "./modules/components/geo.js":
/*!***********************************!*\
  !*** ./modules/components/geo.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../storage/storage */ \"./modules/storage/storage.js\");\n/* harmony import */ var _data_queryApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/queryApi */ \"./modules/data/queryApi.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"../node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet text;\n\nfunction chooseLanguage(data) {\n  let language = _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.loadFromStorage('language');\n\n  if (language === 'RU' || language === 'BY') {\n    text = {\n      location: 'Расположение населенного пункта: ',\n      coords: `${data.results[data.results.length - 1].bounds.northeast.lat}; ${data.results[data.results.length - 1].bounds.northeast.lng}`\n    };\n  } else {\n    text = {\n      location: 'Location of the city: ',\n      coords: `${data.results[data.results.length - 1].bounds.northeast.lat}; ${data.results[data.results.length - 1].bounds.northeast.lng}`\n    };\n  }\n\n  return text;\n}\n\nfunction createBlock() {\n  const pageWrapBlock = document.querySelector('.current_page');\n  const inner = document.createElement('div');\n  inner.classList.add('application_control');\n  inner.classList.add('block');\n  inner.innerHTML = `\n        <div class=\"geo\">\n            <div class=\"geo_title\">${text.location}</div>\n            <div class=\"geo_coord\">${text.coords}</div>\n            <div class=\"geo_map\">\n                <div id=\"map\"></div>\n            </div>\n        </div>\n    `;\n  pageWrapBlock.appendChild(inner);\n}\n\nfunction loadMap(data) {\n  try {\n    (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().accessToken) = 'pk.eyJ1IjoibWl0cmljaDk2IiwiYSI6ImNraHp4aDg3ZjBqdXoydW10MmZmbTN3YzYifQ.LK1DYWREy9-6shJT_XXjLw';\n    const map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n      container: 'map',\n      style: 'mapbox://styles/mapbox/streets-v11',\n      center: [data.results[data.results.length - 1].bounds.northeast.lng, data.results[data.results.length - 1].bounds.northeast.lat],\n      zoom: 9\n    });\n  } catch (error) {\n    console.log(error);\n  }\n}\n\nfunction loadData() {\n  let city = _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.loadFromStorage('city');\n  if (city === \"Homiel'\") city = 'Gomel';\n  const requestUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=2f32be23bc5245c8bd3febc0a4f03b94&pretty=1&no_annotations=1`;\n  (0,_data_queryApi__WEBPACK_IMPORTED_MODULE_1__.default)('GET', requestUrl).then(data => {\n    chooseLanguage(data);\n    createBlock();\n    loadMap(data);\n  }).catch(error => {\n    _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.saveToStorage('city', 'Gomel');\n    loadData();\n  });\n}\n\nfunction createGeoPage() {\n  loadData();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createGeoPage);\n\n//# sourceURL=webpack:///./modules/components/geo.js?");

/***/ }),

/***/ "./modules/components/getGeolocation.js":
/*!**********************************************!*\
  !*** ./modules/components/getGeolocation.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_queryApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/queryApi */ \"./modules/data/queryApi.js\");\n/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../storage/storage */ \"./modules/storage/storage.js\");\n/* harmony import */ var _createPages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPages */ \"./modules/components/createPages.js\");\n\n\n\n\nfunction loadGeolocation() {\n  const requestUrl = `https://ipinfo.io/json?token=fb63a1a1386560`;\n  (0,_data_queryApi__WEBPACK_IMPORTED_MODULE_0__.default)('GET', requestUrl).then(data => {\n    _storage_storage__WEBPACK_IMPORTED_MODULE_1__.default.createStorage('language', data.country);\n    _storage_storage__WEBPACK_IMPORTED_MODULE_1__.default.saveToStorage('city', data.city);\n    _storage_storage__WEBPACK_IMPORTED_MODULE_1__.default.createStorage('degree', 'ce');\n    (0,_createPages__WEBPACK_IMPORTED_MODULE_2__.default)();\n  }).catch(error => {\n    console.log(error);\n    _storage_storage__WEBPACK_IMPORTED_MODULE_1__.default.createStorage('language', 'RU');\n    _storage_storage__WEBPACK_IMPORTED_MODULE_1__.default.saveToStorage('city', 'Gomel');\n    _storage_storage__WEBPACK_IMPORTED_MODULE_1__.default.createStorage('degree', 'ce');\n    (0,_createPages__WEBPACK_IMPORTED_MODULE_2__.default)();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadGeolocation);\n\n//# sourceURL=webpack:///./modules/components/getGeolocation.js?");

/***/ }),

/***/ "./modules/components/loadImage.js":
/*!*****************************************!*\
  !*** ./modules/components/loadImage.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../storage/storage */ \"./modules/storage/storage.js\");\n/* harmony import */ var _data_queryApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/queryApi */ \"./modules/data/queryApi.js\");\n\n\n\nfunction loadApplicationBackground() {\n  let city = _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.loadFromStorage('city');\n  if (city === \"Homiel'\") city = 'Gomel';\n  const requestUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=2f32be23bc5245c8bd3febc0a4f03b94&pretty=1&no_annotations=1`;\n  (0,_data_queryApi__WEBPACK_IMPORTED_MODULE_1__.default)('GET', requestUrl).then(data => {\n    return data.results[0].components.country;\n  }).then(currentCountry => {\n    const requestUrlImage = `https://api.unsplash.com/photos/random?query=${currentCountry}&client_id=fAJsvfFwoBMfY8C7PUlHEJ_vbdTjeOTDk6UdhMerMyw`;\n    (0,_data_queryApi__WEBPACK_IMPORTED_MODULE_1__.default)('GET', requestUrlImage).then(data => {\n      const appImageWrap = document.querySelector('.application_image');\n      appImageWrap.style.backgroundImage = `URL(${data.urls.regular})`;\n    }).catch(error => console.log(error));\n  }).catch(error => {});\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadApplicationBackground);\n\n//# sourceURL=webpack:///./modules/components/loadImage.js?");

/***/ }),

/***/ "./modules/components/three.js":
/*!*************************************!*\
  !*** ./modules/components/three.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_wind_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../images/wind.png */ \"./images/wind.png\");\n/* harmony import */ var _images_water_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../images/water.png */ \"./images/water.png\");\n/* harmony import */ var _images_umbrella_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../images/umbrella.png */ \"./images/umbrella.png\");\n/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../storage/storage */ \"./modules/storage/storage.js\");\n/* harmony import */ var _data_queryApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data/queryApi */ \"./modules/data/queryApi.js\");\n/* harmony import */ var _controller_changeSpeed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../controller/changeSpeed */ \"./modules/controller/changeSpeed.js\");\n/* harmony import */ var _controller_changeDegree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../controller/changeDegree */ \"./modules/controller/changeDegree.js\");\n\n\n\n\n\n\n\nlet text;\n\nfunction getAverage(data) {\n  const average = {\n    days: [],\n    degree: [],\n    wind: [],\n    water: []\n  };\n  let countDays = 3;\n  let sum;\n\n  for (let day = 0; day < countDays; day++) {\n    sum = (data[day].temp[0].min.value + data[day].temp[1].max.value) / 2;\n    average.degree[day] = (0,_controller_changeDegree__WEBPACK_IMPORTED_MODULE_6__.default)(sum);\n    sum = (data[day].humidity[0].min.value + data[day].humidity[1].max.value) / 2;\n    average.water[day] = sum.toFixed(2);\n    sum = (data[day].wind_speed[0].min.value + data[day].wind_speed[1].max.value) / 2;\n    average.wind[day] = (0,_controller_changeSpeed__WEBPACK_IMPORTED_MODULE_5__.default)(sum);\n  }\n\n  let options = {\n    weekday: 'long'\n  };\n  let language = _storage_storage__WEBPACK_IMPORTED_MODULE_3__.default.loadFromStorage('language');\n\n  if (language === 'RU' || language === 'BY') {\n    for (let currentDay = 0; currentDay < countDays; currentDay++) {\n      let day = new Date();\n      day.setDate(day.getDay() + currentDay);\n      let dayOfWeek = new Intl.DateTimeFormat('ru-RU', options).format(day);\n      average.days[currentDay] = dayOfWeek;\n    }\n  } else {\n    for (let currentDay = 0; currentDay < countDays; currentDay++) {\n      let day = new Date();\n      day.setDate(day.getDay() + currentDay);\n      let dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(day);\n      average.days[currentDay] = dayOfWeek;\n    }\n  }\n\n  return average;\n}\n\nfunction chooseLanguage(average) {\n  let language = _storage_storage__WEBPACK_IMPORTED_MODULE_3__.default.loadFromStorage('language');\n  let degree = _storage_storage__WEBPACK_IMPORTED_MODULE_3__.default.loadFromStorage('degree');\n\n  if (language === 'RU' || language === 'BY') {\n    text = {\n      title: 'Средние показатели на 3 дня',\n      day: [...average.days],\n      temperature: 'Ощущаемая температура: ',\n      numberDegree: [...average.degree],\n      degree: `${degree === 'ce' ? ' °C' : ' °F'}`,\n      windTitle: 'Скорость ветра: ',\n      wind: [...average.wind],\n      waterTitle: 'Относительная влажность: ',\n      water: [...average.water]\n    };\n  } else {\n    text = {\n      title: 'Average data for 3 days',\n      day: [...average.days],\n      temperature: 'Perceived temperature: ',\n      numberDegree: [...average.degree],\n      degree: `${degree === 'ce' ? ' °C' : ' °F'}`,\n      windTitle: 'Speed of wind: ',\n      wind: [...average.wind],\n      waterTitle: 'Relative humidity: ',\n      water: [...average.water]\n    };\n  }\n\n  return text;\n}\n\nfunction getCoordinates() {\n  let city = _storage_storage__WEBPACK_IMPORTED_MODULE_3__.default.loadFromStorage('city');\n  if (city === \"Homiel'\") city = 'Gomel';\n  const requestUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=2f32be23bc5245c8bd3febc0a4f03b94&pretty=1&no_annotations=1`;\n  let response;\n  (0,_data_queryApi__WEBPACK_IMPORTED_MODULE_4__.default)('GET', requestUrl).then(data => {\n    response = data;\n  }).then(() => {\n    loadTextData(response);\n  }).catch(error => {\n    _storage_storage__WEBPACK_IMPORTED_MODULE_3__.default.saveToStorage('city', 'Gomel');\n    console.log(error);\n  });\n}\n\nfunction loadTextData(result) {\n  let city = _storage_storage__WEBPACK_IMPORTED_MODULE_3__.default.loadFromStorage('city');\n  if (city === \"Homyel'\") city = 'Gomel';\n  const requestUrl = `https://api.climacell.co/v3/weather/forecast/daily?lat=${result.results[result.results.length - 1].bounds.northeast.lat}&lon=${result.results[result.results.length - 1].bounds.northeast.lng}&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=qEplSE2RzKngcBiPOCSCebLFLzMbcLg0`;\n  (0,_data_queryApi__WEBPACK_IMPORTED_MODULE_4__.default)('GET', requestUrl).then(data => {\n    let average = getAverage(data);\n    chooseLanguage(average);\n    createBlock();\n  }).catch(error => {\n    _storage_storage__WEBPACK_IMPORTED_MODULE_3__.default.saveToStorage('city', 'Gomel');\n    loadTextData();\n  });\n}\n\nfunction createItem(number) {\n  const block = `\n        <li class=\"three_wrap_item\">\n            <div class=\"three_day\">${text.day[number]}</div>\n            <div class=\"item_display\">\n                <div class=\"today_apparent\">\n                    <span class=\"today_name\">${text.temperature}</span>\n                    <span class=\"today_stat apparent\">${text.numberDegree[number]} <span class=\"degree\">${text.degree}</span></span>\n                    <img class=\"favicon\" src=\"${_images_umbrella_png__WEBPACK_IMPORTED_MODULE_2__.default}\"/>\n                </div>\n                <div class=\"today_wind\">\n                    <span class=\"today_name\">${text.windTitle}</span>\n                    <span class=\"today_stat apparent\">${text.wind[number]} m/s</span>\n                    <img class=\"favicon\" src=\"${_images_wind_png__WEBPACK_IMPORTED_MODULE_0__.default}\"/>\n                </div>\n                <div class=\"today_water\">\n                    <span class=\"today_name\">${text.waterTitle}</span>\n                    <span class=\"today_stat apparent\">${text.water[number]} %</span>\n                    <img class=\"favicon\" src=\"${_images_water_png__WEBPACK_IMPORTED_MODULE_1__.default}\"/>\n                </div>\n            </div>\n        </li>\n    `;\n  return block;\n}\n\nfunction createBlock() {\n  const pageWrapBlock = document.querySelector('.current_page');\n  const inner = document.createElement('div');\n  inner.classList.add('application_control');\n  inner.classList.add('block');\n  inner.innerHTML = `\n        <div class=\"weather_three\">\n            <div class=\"weather_three_top\">${text.title}</div>\n            <div class=\"three_wrap day_stat\">\n                <ul class=\"three_wrap_list\">\n                    ${createItem(0)}\n                    ${createItem(1)}\n                    ${createItem(2)}\n                </ul>\n            </div>\n        </div>\n    `;\n  pageWrapBlock.appendChild(inner);\n}\n\nfunction createThreePage() {\n  getCoordinates();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createThreePage);\n\n//# sourceURL=webpack:///./modules/components/three.js?");

/***/ }),

/***/ "./modules/components/today.js":
/*!*************************************!*\
  !*** ./modules/components/today.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_temperature_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../images/temperature.png */ \"./images/temperature.png\");\n/* harmony import */ var _images_wind_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../images/wind.png */ \"./images/wind.png\");\n/* harmony import */ var _images_water_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../images/water.png */ \"./images/water.png\");\n/* harmony import */ var _images_umbrella_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../images/umbrella.png */ \"./images/umbrella.png\");\n/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../storage/storage */ \"./modules/storage/storage.js\");\n/* harmony import */ var _data_queryApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../data/queryApi */ \"./modules/data/queryApi.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../error */ \"./modules/error.js\");\n/* harmony import */ var _controller_changeSpeed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../controller/changeSpeed */ \"./modules/controller/changeSpeed.js\");\n\n\n\n\n\n\n\n\nlet text;\n\nfunction chooseLanguage(data) {\n  let language = _storage_storage__WEBPACK_IMPORTED_MODULE_4__.default.loadFromStorage('language');\n  let degree = _storage_storage__WEBPACK_IMPORTED_MODULE_4__.default.loadFromStorage('degree');\n  let date = new Date();\n\n  if (language === 'RU' || language === 'BY') {\n    text = {\n      city: `${data.location.name}`,\n      country: `${data.location.country}`,\n      day: 'Сб 26 сентябрь',\n      time: `${String(date.getHours()).length === 1 ? '0' + date.getHours() : date.getHours()}:${String(date.getMinutes()).length === 1 ? '0' + date.getMinutes() : date.getMinutes()}:${String(date.getSeconds()).length === 1 ? '0' + date.getSeconds() : date.getSeconds()}`,\n      temperature: 'Ощущаемая температура: ',\n      numberDegree: `${degree === 'ce' ? data.current.temp_c : data.current.temp_f}`,\n      degree: `${degree === 'ce' ? ' °C' : ' °F'}`,\n      windTitle: 'Скорость ветра: ',\n      wind: `${(0,_controller_changeSpeed__WEBPACK_IMPORTED_MODULE_7__.default)(data.current.wind_kph)} м/с`,\n      waterTitle: 'Относительная влажность: ',\n      water: `${data.current.humidity} %`\n    };\n  } else {\n    text = {\n      city: `${data.location.name}`,\n      country: `${data.location.country}`,\n      day: 'Sa 26 september',\n      time: `${String(date.getHours()).length === 1 ? '0' + date.getHours() : date.getHours()}:${String(date.getMinutes()).length === 1 ? '0' + date.getMinutes() : date.getMinutes()}:${String(date.getSeconds()).length === 1 ? '0' + date.getSeconds() : date.getSeconds()}`,\n      temperature: 'Perceived temperature: ',\n      numberDegree: `${degree === 'ce' ? data.current.temp_c : data.current.temp_f}`,\n      degree: `${degree === 'ce' ? ' °C' : ' °F'}`,\n      windTitle: 'Speed of wind: ',\n      wind: `${(0,_controller_changeSpeed__WEBPACK_IMPORTED_MODULE_7__.default)(data.current.wind_kph)} m/s`,\n      waterTitle: 'Relative humidity: ',\n      water: `${data.current.humidity} %`\n    };\n  }\n\n  return text;\n}\n\nfunction getDate() {\n  const date = document.querySelector('.today_date');\n  let options = {\n    weekday: 'long'\n  };\n  let language = _storage_storage__WEBPACK_IMPORTED_MODULE_4__.default.loadFromStorage('language');\n  let dayOfWeek;\n  let month;\n  let day = new Date();\n\n  if (language === 'RU' || language === 'BY') {\n    dayOfWeek = new Intl.DateTimeFormat('ru-RU', options).format(day);\n    month = day.toLocaleString('ru', {\n      month: 'long'\n    });\n  } else {\n    dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(day);\n    month = day.toLocaleString('en', {\n      month: 'long'\n    });\n  }\n\n  date.innerHTML = `${dayOfWeek} ${day.getDate()} ${month}`;\n}\n\nfunction getCurrentTime() {\n  const date = new Date();\n  const today = document.querySelector('.today_time');\n  today.innerHTML = `${String(date.getHours()).length === 1 ? '0' + date.getHours() : date.getHours()}:${String(date.getMinutes()).length === 1 ? '0' + date.getMinutes() : date.getMinutes()}:${String(date.getSeconds()).length === 1 ? '0' + date.getSeconds() : date.getSeconds()}`;\n}\n\nlet timer;\n\nfunction setTimer() {\n  setTimeout(() => {\n    if (document.querySelector('.today_time') !== null) {\n      timer = setInterval(getCurrentTime, 1000);\n    }\n  }, 500);\n}\n\nfunction loadTextData() {\n  let city = _storage_storage__WEBPACK_IMPORTED_MODULE_4__.default.loadFromStorage('city');\n  if (city === \"Homyel'\") city = 'Gomel';\n  const requestUrl = `https://api.weatherapi.com/v1/current.json?key=5a1e87cfcc7d4a4b93d120756202611&q=${city}`;\n  (0,_data_queryApi__WEBPACK_IMPORTED_MODULE_5__.default)('GET', requestUrl).then(data => {\n    chooseLanguage(data);\n    createBlock();\n    getDate();\n  }).catch(error => {\n    _storage_storage__WEBPACK_IMPORTED_MODULE_4__.default.saveToStorage('city', 'Gomel');\n    loadTextData();\n    (0,_error__WEBPACK_IMPORTED_MODULE_6__.default)();\n  });\n}\n\nfunction createBlock() {\n  const pageWrapBlock = document.querySelector('.current_page');\n  const inner = document.createElement('div');\n  inner.classList.add('application_control');\n  inner.classList.add('block');\n  inner.innerHTML = `\n        <div class=\"weather_today\">\n            <div class=\"weather_today_wrap\">\n                <div class=\"today_top\">\n                    <div class=\"today_city\">${text.city}</div>\n                    <div class=\"today_country\">${text.country}</div>\n                    <div class=\"today_date\">${text.day}</div>\n                    <div class=\"today_time\">${text.time}</div>\n                </div>\n                <div class=\"today_left\">\n                    <div class=\"today_temperature\">\n                        <img class=\"today_temperature_image\" src=\"${_images_temperature_png__WEBPACK_IMPORTED_MODULE_0__.default}\" alt=\"temperature\">\n                        <div class=\"today_temperature_value\">${text.numberDegree} <span class=\"degree\">${text.degree}</span></div>\n                    </div>\n                </div>\n                <div class=\"today_right day_stat\">\n                    <div class=\"today_apparent\">\n                        <span class=\"today_name\">${text.temperature}</span>\n                        <span class=\"today_stat apparent\">${text.numberDegree} <span class=\"degree\">${text.degree}</span></span>\n                        <img class=\"favicon\" src=\"${_images_umbrella_png__WEBPACK_IMPORTED_MODULE_3__.default}\"/>\n                    </div>\n                    <div class=\"today_wind\">\n                        <span class=\"today_name\">${text.windTitle}</span>\n                        <span class=\"today_stat apparent\">${text.wind}</span>\n                        <img class=\"favicon\" src=\"${_images_wind_png__WEBPACK_IMPORTED_MODULE_1__.default}\"/>\n                    </div>\n                    <div class=\"today_water\">\n                        <span class=\"today_name\">${text.waterTitle}</span>\n                        <span class=\"today_stat apparent\">${text.water}</span>\n                        <img class=\"favicon\" src=\"${_images_water_png__WEBPACK_IMPORTED_MODULE_2__.default}\"/>\n                    </div>\n                </div>\n            </div>\n        </div>\n    `;\n  pageWrapBlock.appendChild(inner);\n}\n\nfunction createTodayPage() {\n  loadTextData();\n  if (timer) clearInterval(timer);\n  setTimer();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createTodayPage);\n\n//# sourceURL=webpack:///./modules/components/today.js?");

/***/ }),

/***/ "./modules/controller/changeDegree.js":
/*!********************************************!*\
  !*** ./modules/controller/changeDegree.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../storage/storage */ \"./modules/storage/storage.js\");\n\n\nfunction changeDegree(current) {\n  let degree = _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.loadFromStorage('degree');\n\n  if (degree === 'ce') {\n    return Math.round(current);\n  } else {\n    return Math.round(9 / 5 * current + 32);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeDegree);\n\n//# sourceURL=webpack:///./modules/controller/changeDegree.js?");

/***/ }),

/***/ "./modules/controller/changeSpeed.js":
/*!*******************************************!*\
  !*** ./modules/controller/changeSpeed.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction changeSpeed(current) {\n  return (current * 1000 / 3600).toFixed(2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeSpeed);\n\n//# sourceURL=webpack:///./modules/controller/changeSpeed.js?");

/***/ }),

/***/ "./modules/data/queryApi.js":
/*!**********************************!*\
  !*** ./modules/data/queryApi.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction sendRequest(method, url, body = null) {\n  return fetch(url).then(response => response.json()).catch(error => {\n    error;\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendRequest);\n\n//# sourceURL=webpack:///./modules/data/queryApi.js?");

/***/ }),

/***/ "./modules/error.js":
/*!**************************!*\
  !*** ./modules/error.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage/storage */ \"./modules/storage/storage.js\");\n\nlet text;\n\nfunction choooseLanguage() {\n  let language = _storage_storage__WEBPACK_IMPORTED_MODULE_0__.default.loadFromStorage('language');\n\n  if (language === 'RU' || language === 'BY') {\n    text = {\n      title: 'Ваш город не найден'\n    };\n  } else {\n    text = {\n      title: 'Your city not found'\n    };\n  }\n}\n\nfunction createBlock() {\n  choooseLanguage();\n  const pageWrapBlock = document.querySelector('.application_wrap');\n  const inner = document.createElement('div');\n  inner.classList.add('error_page');\n  inner.classList.add('block');\n  inner.innerHTML = `${text.title}`;\n  pageWrapBlock.appendChild(inner);\n}\n\nfunction destroyPage() {\n  const errorBlock = document.querySelector('.error_page');\n  errorBlock.parentNode.removeChild(errorBlock);\n}\n\nfunction createPage() {\n  createBlock();\n  setTimeout(destroyPage, 3000);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createPage);\n\n//# sourceURL=webpack:///./modules/error.js?");

/***/ }),

/***/ "./modules/storage/storage.js":
/*!************************************!*\
  !*** ./modules/storage/storage.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction createStorage(state, value) {\n  if (localStorage.getItem(state) === null) localStorage.setItem(state, value);\n}\n\nfunction saveToStrorage(state, value) {\n  localStorage.setItem(state, value);\n}\n\nfunction loadFromStorage(state) {\n  return localStorage.getItem(state);\n}\n\nconst storage = {\n  createStorage: createStorage,\n  saveToStorage: saveToStrorage,\n  loadFromStorage: loadFromStorage\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (storage);\n\n//# sourceURL=webpack:///./modules/storage/storage.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/styles.css":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/styles.css ***!
  \**********************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.*, module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box; }\\n\\n/*\\r\\n    COLORS\\r\\n    rgb(181,184,189)\\r\\n    rgb(119,122,127)\\r\\n    rgb(26,56,120)\\r\\n    rgb(22,38,71)\\r\\n    rgb(28,27,32)\\r\\n    COLORS\\r\\n*/\\n.block {\\n  margin-left: 10%;\\n  width: 80%;\\n  height: 70vh;\\n  background-color: rgba(26, 56, 120, 0.7);\\n  border-radius: 10px;\\n  border: 1px solid #b5b8bd; }\\n\\n.application_wrap {\\n  position: relative; }\\n\\n.error_page {\\n  position: absolute;\\n  top: 150px;\\n  text-align: center;\\n  padding: 100px 0;\\n  font-size: 80px;\\n  font-weight: 700;\\n  background-color: #1c1b20;\\n  color: #b5b8bd;\\n  animation-duration: 0.2s;\\n  animation-fill-mode: forwards;\\n  animation-name: fadeInDown; }\\n\\n@keyframes fadeInDown {\\n  0% {\\n    opacity: 0;\\n    transform: translate3d(0px, -100%, 0px); }\\n  100% {\\n    opacity: 1;\\n    transform: none; } }\\n\\n.application_image {\\n  margin-top: -50px;\\n  width: 98.7vw;\\n  height: 300vh;\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat; }\\n\\n/*GENERAL FOR PAGES START*/\\n.button {\\n  border-radius: 5px;\\n  border: 1px solid #b5b8bd;\\n  background-color: #1a3878;\\n  color: #b5b8bd;\\n  text-decoration: none;\\n  text-align: center;\\n  cursor: pointer;\\n  outline: none; }\\n\\n.button:hover {\\n  background-color: #162647;\\n  border: 1px solid #162647; }\\n\\n/*GENERAL FOR PAGES END*/\\n/*ONE DAY STAT START*/\\n/*ONE DAY STAT END*/\\n/*CONTROL PAGE START*/\\n.application_control {\\n  display: block;\\n  padding-top: 50px; }\\n\\n.control_inner {\\n  margin: 10px;\\n  margin-top: 50px; }\\n\\n.control_buttons {\\n  width: 100%;\\n  display: inline-flex;\\n  justify-content: space-around; }\\n\\n.control_button {\\n  width: 20%;\\n  height: 50px; }\\n\\n.control_search {\\n  margin: 0 10%;\\n  margin-top: 50px; }\\n\\n.search_geo {\\n  width: 70%;\\n  height: 70px;\\n  font-size: 40px;\\n  outline: none;\\n  border-radius: 5px;\\n  border: 1px solid #b5b8bd;\\n  background-color: #1c1b20;\\n  color: #b5b8bd; }\\n\\n.search_geo_send {\\n  width: 20%;\\n  height: 70px;\\n  font-size: 40px; }\\n\\n/*CONTROL PAGE END*/\\n/*WEATHER TODAY PAGE START*/\\n.weather_today {\\n  margin-top: -20px;\\n  margin-bottom: 100px; }\\n\\n.weather_today_wrap {\\n  position: relative; }\\n\\n.today_top {\\n  height: 70px;\\n  border-radius: 5px;\\n  border: 1px solid #b5b8bd;\\n  background-color: #1c1b20;\\n  color: #b5b8bd;\\n  margin: 10px;\\n  display: inline-flex;\\n  justify-content: space-around;\\n  width: 80%;\\n  margin: 20px 10% 0;\\n  line-height: 50px; }\\n\\n.today_left {\\n  position: absolute;\\n  left: 200px;\\n  text-align: center;\\n  border-radius: 5px;\\n  border: 1px solid #b5b8bd;\\n  background-color: #1c1b20;\\n  color: #b5b8bd;\\n  margin: 10px; }\\n\\n.today_temperature_image {\\n  width: 100px;\\n  height: 100px; }\\n\\n.today_right {\\n  position: absolute;\\n  right: 200px;\\n  width: 30%;\\n  line-height: 50px;\\n  border-radius: 5px;\\n  border: 1px solid #b5b8bd;\\n  background-color: #1c1b20;\\n  color: #b5b8bd;\\n  margin: 10px; }\\n\\n/*WEATHER TODAY PAGE END*/\\n/*WEATHER THREE PAGE START*/\\n.weather_three_top {\\n  border-radius: 5px;\\n  border: 1px solid #b5b8bd;\\n  background-color: #1c1b20;\\n  color: #b5b8bd;\\n  width: 80%;\\n  margin: 50px 10% 20px;\\n  height: 100px;\\n  font-size: 40px;\\n  font-weight: 700;\\n  text-align: center;\\n  padding-top: 20px; }\\n\\n.three_day {\\n  text-align: center;\\n  font-size: 30px; }\\n\\n.three_wrap_list {\\n  display: inline-flex;\\n  width: 100%;\\n  flex-wrap: wrap;\\n  justify-content: space-around; }\\n\\n.three_wrap_item {\\n  border-radius: 5px;\\n  border: 1px solid #b5b8bd;\\n  background-color: #1c1b20;\\n  color: #b5b8bd;\\n  padding: 20px;\\n  margin: 10px 0;\\n  width: 32%;\\n  height: 200px;\\n  list-style-type: none; }\\n\\n/*WEATHER THREE PAGE END*/\\n.error_message {\\n  text-align: center;\\n  padding: 100px 0;\\n  font-size: 40px;\\n  color: #b4b4b4;\\n  font-weight: 700;\\n  text-transform: uppercase; }\\n\\n/*GEO PAGE START*/\\n.geo {\\n  padding: 70px;\\n  font-size: 30px;\\n  color: #b5b8bd;\\n  text-align: center; }\\n\\n.geo_title, .geo_coord {\\n  display: inline-block; }\\n\\n.geo_map {\\n  border: 1px solid #162647;\\n  width: 80%;\\n  height: 250px;\\n  margin: 10px 10% 0; }\\n\\n/*GEO PAGE END*/\\n.active_button {\\n  background-color: #162647;\\n  border: 1px solid #162647; }\\n\\n.favicon {\\n  width: 30px;\\n  height: 30px;\\n  vertical-align: middle; }\\n\\n#map {\\n  width: 100%;\\n  height: 300px; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/styles.css?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./images/temperature.png":
/*!********************************!*\
  !*** ./images/temperature.png ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"56121b97cc7a8689f82b1fad982444ae.png\");\n\n//# sourceURL=webpack:///./images/temperature.png?");

/***/ }),

/***/ "./images/umbrella.png":
/*!*****************************!*\
  !*** ./images/umbrella.png ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6607efa89d37d13acdd73c6b562634a3.png\");\n\n//# sourceURL=webpack:///./images/umbrella.png?");

/***/ }),

/***/ "./images/water.png":
/*!**************************!*\
  !*** ./images/water.png ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c68399b64b405287d1709eed2a4c1b8e.png\");\n\n//# sourceURL=webpack:///./images/water.png?");

/***/ }),

/***/ "./images/wind.png":
/*!*************************!*\
  !*** ./images/wind.png ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0df07e214e9be1a9e31b6d33e9ec1c2f.png\");\n\n//# sourceURL=webpack:///./images/wind.png?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./index.js","vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_mapbox-gl_dist_mapbox-gl_js--21592f"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = function() {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
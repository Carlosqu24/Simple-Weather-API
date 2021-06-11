import { getWeatherData } from "./js/app.js"

const $searchInput = document.querySelector('.search-input');
const $searchBtn = document.querySelector('.search-btn');

document.addEventListener('click', e => {
    
    if (e.target == $searchBtn) {
        getWeatherData($searchInput.value);
    }

})


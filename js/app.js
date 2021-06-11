
const API_URL = `http://api.openweathermap.org/data/2.5/`;
const API_KEY = "194201bfb26e46d1d5a757d4b521f114";


export const getWeatherData = async ({place = 'London'}) => {
    try {
        const options = {
            method: 'GET',
            Headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }

        const res = await fetch(`${API_URL}weather?q=${place}&appid=${API_KEY}&units=metric`, options);
        const data = await res.json();

        showData({
            name: data.name,
            icon: data.weather[0].icon,
            temp: data.main.temp,
            description: data.weather[0].description 
        });

    } catch (error) {
        let message = error.statusText || "Ocurrió un error";

        console.error(`Error ${error.status}: ${message}`);
    };
};

const showData = ({name, icon, temp, description}) => {
    const $placeName = document.querySelector('.place-name');
    const $icon = document.querySelector('.icon');
    const $temp = document.querySelector('.average-temp');
    const $description = document.querySelector('.info .description-weather');

   $placeName.textContent = `Weather in ${name}`;
   $icon.src = `https://openweathermap.org/img/wn/${icon}.png`;
   $temp.textContent = `${temp}° C`;
   $description.textContent = description;
}





let searchBtn = document.getElementById('weatherForm');

const getWeather = async (e) => {
    e.preventDefault();
    let cityName = document.getElementById('city').value;
    console.log(cityName);

    // Api request
    try {
        const key = '';  //  Add your weatherapi.com key
        const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}&aqi=no`;
    
        const response = await fetch(url);
        const data = await response.json();
    
        document.getElementById('weather').innerText = data.current.condition.text, data.current.condition.icon;
        document.getElementById('location').innerText = `${data.location.name}, ${data.location.country}`;
        document.getElementById('temp').innerText = `${data.current.temp_c} °C`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('temperature').innerText = 'Data not found';
        document.getElementById('location').innerText = 'Data not found';
        document.getElementById('weather').innerText = 'Data not found';
    }
    
}

searchBtn.addEventListener('submit', getWeather);
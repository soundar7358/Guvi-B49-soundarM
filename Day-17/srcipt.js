// Function to create a Bootstrap card for country information
function createCountryCard(data) {
    const card = document.createElement('div');
    card.classList.add('card', 'col-md-4', 'my-3');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header', 'bg-dark', 'text-white'); // Adding CSS classes for black background and white text color
    cardHeader.innerText = data.name;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML = `
        <b>Capital:</b> ${data.capital}<br>
        <b>Latlng:</b> ${data.latlng[0]}, ${data.latlng[1]}<br>
        <b>Region:</b> ${data.region}<br>
        <b>Country Code:</b> ${data.alpha3Code}<br>
    `;

    const flagImg = document.createElement('img');
    flagImg.classList.add('card-img-top');
    flagImg.src = data.flag;
    flagImg.alt = `${data.name} Flag`;

    const weatherBtn = document.createElement('button');
    weatherBtn.classList.add('btn', 'btn-primary');
    weatherBtn.innerText = 'Click for Weather';

    cardBody.appendChild(cardText);
    cardBody.appendChild(weatherBtn);

    card.appendChild(cardHeader);
    card.appendChild(flagImg);
    card.appendChild(cardBody);

    // Event listener for the weather button
    weatherBtn.addEventListener('click', () => {
        fetchWeatherData(data.alpha3Code, data.name);
    });

    document.getElementById('countryInfo').appendChild(card);
}

// Function to fetch country information using the rest countries API
function fetchCountryInfo() {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(countries => {
            countries.forEach(country => {
                createCountryCard(country);
            });
        })
        .catch(error => console.error('Error fetching country info:', error));
}

// Function to fetch weather data using the open weather map API
function fetchWeatherData(countryCode, countryName) {
    const apiKey = 'c5b6a98b03910ff65a6ab18b6b6acb1b';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryCode}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(weatherData => {
            alert(`Weather in ${countryName} - Temperature: ${weatherData.main.temp} °C`);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Fetch country information and display on cards
document.addEventListener('DOMContentLoaded', fetchCountryInfo);

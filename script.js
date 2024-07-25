let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'a3bd6b3c1dfe7b001885de538532e27a'
let diffKelvin = 273.15

document.getElementById('btnSearch').addEventListener('click', () => {
    const city = document.getElementById('cityIn').value
    if(city){
        fetchClimateData(city)
    } 
})

function fetchClimateData(city){
    fetch( `${urlBase}?q=${city}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => showWeather(data))
}

function showWeather(data){
    const divClimateData = document.getElementById('climateData')
    divClimateData.innerHTML=''

    const cityName = data.name
    const countryName = data.sys.country 
    const temperature = data.main.temp 
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon


    const cityTitle = document.createElement('h2')
    cityTitle.textContent = `${cityName}, ${countryName}` 

    const temperatureInfo = document.createElement('p')
    temperatureInfo.textContent =  `La temperatura es: ${Math.floor(temperature-diffKelvin)}°C` 

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es: ${humidity}`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripcion metereologica es: ${description}`

    divClimateData.appendChild(cityTitle)
    divClimateData.appendChild(temperatureInfo)
    divClimateData.appendChild(humidityInfo)
    divClimateData.appendChild(iconInfo)
    divClimateData.appendChild(descriptionInfo)
}




## Applicacion Web con JS, HTML y CSS, Apis

## Configuración inicial

Antes de comenzar, necesitarás obtener una clave de API de OpenWeatherMap. Sigue estos pasos para obtener tu propia clave de API:

1.  Regístrate en el sitio web de OpenWeatherMap en [https://openweathermap.org](https://openweathermap.org/) si aún no tienes una cuenta.
2.  Inicia sesión en tu cuenta y navega a la sección "API Keys" (Claves de API) en tu perfil.
3.  Genera una nueva clave de API y asegúrate de copiarla, ya que la necesitarás más adelante en el código.

## Estructura del código

A continuación se muestra el código JavaScript necesario para realizar la solicitud a la API de OpenWeatherMap y mostrar los datos del clima en tu aplicación. Asegúrate de que el código esté vinculado correctamente con tu archivo HTML y que la etiqueta `<div>` con el ID "datosClima" esté presente en tu página.

## Explicación del código

El código anterior consta de dos funciones principales: `fetchClimateData(city)` y `showWeather(data)`. Aquí está cómo funciona cada una:

1.  `fetchClimateData(city)`: Esta función se encarga de hacer una solicitud a la API de OpenWeatherMap para obtener los datos del clima de la ciudad especificada. Recibe el nombre de la ciudad como parámetro. Utiliza la función `fetch()` para enviar una solicitud GET a la URL de la API, incluyendo la ciudad y tu clave de API. Luego, convierte la respuesta en formato JSON utilizando el método `json()`. Finalmente, llama a la función `showWeather(data)` pasando los datos obtenidos como argumento.

    function fetchDatosClima(ciudad){
        fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
    }
    
2.  `showWeather(data)`: Esta función se encarga de mostrar los datos del clima en la página. Recibe los datos del clima en formato JSON como parámetro. Primero, obtiene las diferentes propiedades relevantes de los datos, como el nombre de la ciudad, el nombre del país, la temperatura, la humedad, la descripción y el icono del clima. Luego, crea elementos HTML apropiados, como encabezados y párrafos, y les asigna el contenido correspondiente utilizando la propiedad `textContent`. También crea un elemento de imagen para mostrar el icono del clima. Finalmente, agrega todos los elementos creados al elemento `<div>` con el ID "datosClima" en tu página.

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

    

## Uso de la aplicación

1.  Asegúrate de tener los archivos HTML y CSS vinculados correctamente en tu página web.
2.  Inserta un campo de entrada de texto en tu página con el ID "ciudadEntrada" para que los usuarios puedan ingresar el nombre de la ciudad.
3.  Agrega un botón con el ID "botonBusqueda" para permitir a los usuarios buscar el clima de la ciudad ingresada.
4.  Cuando un usuario haga clic en el botón de búsqueda, se llamará a la función `fetchClimateData(city)` con el valor ingresado en el campo de entrada de texto.
5.  La función `fetchClimateData(city)` realizará una solicitud a la API de OpenWeatherMap y obtendrá los datos del clima correspondientes a la ciudad ingresada.
6.  Una vez que se obtengan los datos del clima, la función `showWeather(data)` mostrará los detalles relevantes del clima en la página.

Recuerda reemplazar `'API_KEY'` en el código con tu propia clave de API obtenida de OpenWeatherMap.

¡Ahora deberías tener una aplicación de clima completamente funcional en tu página web! Los usuarios podrán ingresar una ciudad y obtener información actualizada sobre el clima en esa ubicación.

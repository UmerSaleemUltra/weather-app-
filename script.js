document.getElementById('getWeather').addEventListener('click', function() {
        var city = document.getElementById('city').value;
        var apiKey = 'c24b5c0929dd458481f202142242204';
        var apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    document.getElementById('weatherResult').innerText = data.error.message;
                } else {
                    var weatherInfo = `Weather in ${city}: ${data.current.condition.text}, Temperature: ${data.current.temp_c}°C`;
                    document.getElementById('weatherResult').innerText = weatherInfo;
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                document.getElementById('weatherResult').innerText = 'An error occurred. Please try again later.';
            });
    });

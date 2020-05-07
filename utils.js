function mungeLocation(locationData) {
    try {
        const firstItem = locationData[0];

        return {
            formatted_query: firstItem.display_name,
            latitude: firstItem.lat,
            longitude: firstItem.lon
        };
    } catch (e) {
        return {};
    }
}



function mungeWeather(weatherData) {
    return weatherData.map(item => {
        object.forecast = item.weather.description;
        object.time = item.datetime;
       
    });
}

module.exports = { mungeLocation, mungeWeather };

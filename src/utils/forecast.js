const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7ce8e9fe0085e5ea87e0bd717943b013&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0]+',It is currently '+ body.current.temperature + '.It feels like '+ body.current.feelslike +'% for rain.')
        }
    })
}

module.exports = forecast
var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=46cf170f638fac2fa8d94bed40252cf6&units=imperial'

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl).then(function success (res) {
      console.log("res: ", res)
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp
      }
    }, function error (res) {
      throw new Error('Unable to fetch weather for that location.')
    })
  }
}

var React = require('react')
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    debugger
    this.setState({
      isLoading: true
    })
    var self = this
    openWeatherMap.getTemp(location).then(function success (temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function error (errorMsg) {
      self.setState({isLoading: false})
      alert(errorMsg)
    })
  },
  render: function () {
    var {isLoading, location, temp} = this.state

    function renderMessage () {
      if (isLoading) {
        return <h3 className='text-center'>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    return (
      <div>
        <h1 className='text-center'>
          Get weather
        </h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather

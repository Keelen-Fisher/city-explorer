import React from 'react';

import Card from 'react-bootstrap/Card';
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {
  render(){
    return(
      <Card>
        <WeatherDay weatherData={this.props.weatherData}/>
        {/* Right under your render() method, if you console.log() this.state.weatherData and then search for a city, you'll see it's coming back an empty object. so somewhere along the way, your data isn't getting passed. You're passing this.state.weatherData into your Weather component, so that's why nothing is rendering. You'll want to figure that out */}

        {/* On a side note, if you follow how you're passing this.state.weatherData along, you'll see you changed it a bit along the way, so you'll also want to fix that */}
      </Card>
    );
  }
}





export default Weather;
import React from 'react';

import Card from 'react-bootstrap/Card';
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {
  render(){
    return(
      <Card>
        <WeatherDay weatherState={this.props.weatherState}/>
      </Card>
    );
  }
}





export default Weather;
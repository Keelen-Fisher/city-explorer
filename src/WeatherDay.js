import React from 'react';
import Card from 'react-bootstrap/Card';
class WeatherDay extends React.Component {
  render() {
    return (
      <Card>

        {this.props.WeatherState && this.props.WeatherState.map ((v, i) =>
          <p key={i}>{v.date} {v.description}</p>)}

      </Card>
    );
  }
}

export default WeatherDay

import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


class WeatherDay extends React.Component {
  render() {
    return (

      <ListGroup>
        <ListGroup.Item>Weather Report: </ListGroup.Item>
        <ListGroup.Item>Date: {this.props.value.date}</ListGroup.Item>
        <ListGroup.Item>Description: {this.props.value.description}</ListGroup.Item>
        <ListGroup.Item>{this.props.value.lowtemp}</ListGroup.Item>
        <ListGroup.Item>Temperature For the Day:{this.props.value.temp}</ListGroup.Item>


      </ListGroup>


    );
  }
}

export default WeatherDay

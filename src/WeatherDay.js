import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class WeatherDay extends React.Component {
  render() {
    return (
      <>

        <Card
          style={{ width: '12rem' }}
        >
          {/* <Card.Img variant="top" /> */}
          <Card.Body>
            <Card.Text>Weather Report: </Card.Text>
            <Card.Text>Date: {this.props.value.date}</Card.Text>
            <Card.Text>Description: {this.props.value.description}</Card.Text>

            <Card.Text>Temperature For the Day:</Card.Text>
            <Card.Text>Low:{this.props.value.lowTemp}</Card.Text>
            <Card.Text>High:{this.props.value.highTemp}</Card.Text>
          </Card.Body>


        </Card>

      </>


    );
  }
}

export default WeatherDay

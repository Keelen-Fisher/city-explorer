import React from 'react';
import './App.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Weather from './Weather.js';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Movie from './Movie.js';
// import Weather from './Weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '', //city_name: ''
      error: false,
      showData: false,
      errorMessage: '',
      // Can't use empty object 
      weatherData: [],
      movieData: [],
      cityLongitude: '-95.3676974',
      cityLatitude: '29.7589382',
      cityData: [],
      showWeather: true,
      showMovie: true,

    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  getMovieData = async (e) => {
    try {
      let movieURL = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.city}`;
      let movieData = await axios.get(movieURL);

      this.setState({ movieData: movieData.data });
    }
    catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.message}`
      });
    }
  }


  // Create a handle submit for the city's information.
  handleGetCity = async (e) => {
    e.preventDefault();
    try {
      // -------------LOCATIONIQ API---------------------------------------------------------------------
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
      let cityData = await axios.get(url);
      let weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}`;
      let weatherData = await axios.get(weatherURL);




      this.setState({
        city: cityData.data[0].display_name,
        cityData: cityData.data[0],
        cityLongitude: cityData.data[0].lon,
        cityLatitude: cityData.data[0].lat,
        weatherData: weatherData.data,

      });

      // ----------MOVIE API FROM SERVER.JS BACKEND--------------------------------------------------------------
      // let movieUrl = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.city_name}`;
      // let movieData = await axios.get(movieUrl);
      this.getMovieData()
    }
    catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occured: ${error.message}`
      });
    }
  }

  render() {



    return (
      <>
        <h1>City Explorer</h1>
        <Container>
          <Form onSubmit={this.handleGetCity}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Pick A City!"
                onInput={this.handleInput}
                style={{ width: '32rem' }} />
            </Form.Group>
            <button type='submit' className="btn btn-info">
              Explore!
            </button>
          </Form>
        </Container>

        {/* add this into Weather.js, then add .props in the this.state */}
        {/* /* This is a conditional rendering statement that checks if the `showData` property in the
        component's state is true. If it is true, it will render an unordered list with a single list
        item that displays the `cityData` property in the component's state. If `showData` is false,
    nothing will be rendered. */}

        {
          this.state.showData &&
          <ul>

            <li>{this.state.cityData}</li >

          </ul>
        }
        <Container>
          <Card style={{ width: '20rem' }}>

            <Card.Title>
              <h2>City: {this.state.city}</h2>
              <p>City's Latitude: {this.state.cityLatitude}</p>
              <p>City's Longitude: {this.state.cityLongitude}</p>
            </Card.Title>

            <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_LOCATIONIQ_KEY}&center=${this.state.cityLatitude},${this.state.cityLongitude}&zoom=10`}></Card.Img>

            {/* <Card.Text> */}
            {/* The variable that you set equal to the object: will be in your {this.state.<vairable name>} */}
            {/* <Weather weatherData={this.state.weatherData} /> */}
            {/* </Card.Text> */}

            {/* <Card.Text> */}
            {/* <Movies movieData={this.state.movieState} /> */}
            {/* </Card.Text> */}

          </Card>
        </Container>

        <div>
          <Container>
            <Row>
              <Movie movieData={this.state.movieData} />
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row>
              <Weather weatherData={this.state.weatherData} />
            </Row>
          </Container>

        </div>
        {/* {
        this.state.error ? <p>{this.state.errorMessage}</p> : <p></p>
      } */}
      </>
    );
  }

}
export default App;



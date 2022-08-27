import React from 'react';
import './App.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Weather from './Weather.js';
import Movies from './MoviesP.js';
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
      weatherData: [], //cityData: []
      movieData: [],
      cityLongitude: '',
      cityLatitude: ''
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  // Create a handle submit for the city's information.
  handleGetCity = async (e) => {
    e.preventDefault();
    try {
      // -------------LOCATIONIQ API---------------------------------------------------------------------
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
      let cityData = await axios.get(url);
      this.setState({
        cityData: cityData.data[0].display_name,
        cityLongitude: cityData.data[0].lon,
        cityLatitude: cityData.data[0].lat,
      });

      // ------------WEATHER API FROM SERVER.JS BACKEND---------------------------------------------------------

      let weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}`;
      let weatherData = await axios.get(weatherURL);
      this.setState({
        weatherState: weatherData
      });



      // ----------MOVIE API FROM SERVER.JS BACKEND--------------------------------------------------------------
      let movieUrl = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.city_name}`;
      let movieData = await axios.get(movieUrl);
      this.setState({
        movieState: movieData,
      });

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

        <form onSubmit={this.handleGetCity}>

          <label>Pick A City!
            <input type="text" placeholder="Type Something" onInput={this.handleInput} />
          </label>

          <button type='submit' className="btn btn-info">
            Explore!
          </button>

        </form>

        {/* add this into Weather.js, then add .props in the this.state */}
        {
          this.state.showData &&
          <ul>

            <li>{this.state.cityData}</li >

          </ul>
        }
        <Card style={{ width: '20rem' }}>

          <Card.Title>
            <h2>City: {this.state.city}</h2>
            <p>City's Latitude: {this.state.cityLatitude}</p>
            <p>City's Longitude: {this.state.cityLongitude}</p>
          </Card.Title>

          <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_LOCATIONIQ_KEY}&center=${this.state.cityLatitude},${this.state.cityLongitude}&zoom=10`}></Card.Img>

          {/* <Card.Text> */}
          {/* The variable that you set equal to the object: will be in your {this.state.<vairable name>} */}
              <Weather weatherData={this.state.weatherData} />
          {/* </Card.Text> */}

          {/* <Card.Text> */}
            <Movies movieData={this.state.movieState} />
          {/* </Card.Text> */}

        </Card>


        {/* <Weather /> */}
        {/* <p>{this.state.weatherData[0]}</p> */}
      </>
    );
  }

}
export default App;



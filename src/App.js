import React from 'react';
import './App.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
    

    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
    console.log(this.state);
  };






  // Create a handle submit for the city's information.
  handleGetCity = async (e) => {
    e.preventDefault();
    try {

      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`
      

      let cityData = await axios.get(url);

      console.log(cityData.data[0]);

      this.setState({cityData: cityData.data[0]});
      this.setState({cityLongitude: cityData.data[0].lon});
      this.setState({cityLatitude: cityData.data[0].lat});
      // IMAGE SRC:

      // 

      this.setState({
        cityData: cityData.data.city,
        error: false
      });
    }

    catch (error) {
      console.log(error)
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

          <label>
            Pick A City!
            <input type="text" placeholder="Type Something" onInput={this.handleInput} />
          </label>

          <button type='submit'>
            Explore!
          </button>

        </form>

        {
          this.state.error
          ?
          <p>{this.state.errorMessage}</p>
          :
          <ul>
            {/* {cityResult} */}
          </ul>
        }

        <Card style={{width: '14rem' }}>
          <Card.Title>
            <h2>City: {this.state.city}</h2>
            <p>City's Latitude: {this.state.cityLatitude}</p>
            <p>City's Longitude: {this.state.cityLongitude}</p>
          </Card.Title>

          <Card.Img src= {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_LOCATIONIQ_KEY}&center=${this.state.cityLatitude},${this.state.cityLongitude}&zoom=10`}></Card.Img>
        </Card>


      </>
    );
  }

}

export default App;



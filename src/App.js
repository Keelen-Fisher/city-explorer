import React from 'react';
import './App.css';
// import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      city: '',
      cityData: [],

    }
  }

  handleInput = (e) =>{
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  




  // Create a handle submit for the city's information.
  // handleGetCity = asynch (e) => {
    // e.preventDefault();

    // let cityData = await axios.get('')
  // console.log(cityData.data.'');
  // this.setState({
    // cityData: cityData.'' 
  // })

  // }



  render(){
    return(
      <>
        <h1>City Explorer</h1>

        <form onSubmit={this.handleGetCity}>

          <label> 
            Pick A City!
            <input type="text" onInput={this.handleInput} />
          </label>

          <button type='submit'>
            Find It!
          </button>

        </form>
      </>
    );
  }
} 

export default App;



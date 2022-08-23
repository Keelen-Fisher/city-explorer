import React from 'react';
import './App.css';
// import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cityData: [],
    }
  }
  // Create a handle submit for the city's information.
  // handleGetCity = asynch (e) => {
    // e.preventDefault();

    // let cityData = await axios.get('')
  // }

  render(){
    return(
      <>
        <h1>City Explorer</h1>

        <form>
          
        </form>
      </>
    );
  }
} 

export default App;

import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cityData: [],
    }
  }

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

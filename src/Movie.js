import React from 'react';
import MoviesP from './MoviesP';
import Accordion from 'react-bootstrap/Accordion';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: this.props.movieData,
    }
  }
  render() {
    let movieArray = this.props.movieData
    
      movieArray.map((value, index) =>
        <MoviesP key={index} value={value} />
      )

      return (

        <>
          {/* {movieData} */}
        </>
      )
    
  }
}

export default Movie;

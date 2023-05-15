import React from 'react';
import MoviesP from './MoviesP';
// import Accordion from 'react-bootstrap/Accordion';

class Movie extends React.Component {

  render() {

    return (

      <>
        <MoviesP movieData={this.props.movieData} />
      </>
    )

  }
}

export default Movie;

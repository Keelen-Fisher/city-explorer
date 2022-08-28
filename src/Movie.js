import React from 'react';
import MoviesP from './MoviesP';

class Movie extends React.Component {

  render(){
    let movieData = this.props.movieData.map((value, index) => 
      <MoviesP key={index} value={value}/>
    )

    return(

      <>
      {movieData}
      </>
    )
  }
}

export default Movie;
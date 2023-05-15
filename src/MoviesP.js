import React from 'react';
import Card from 'react-bootstrap/Card';

class MoviesP extends React.Component {
  render() {
    return (
      <>
        {this.props.movieData.map((movie, index) =>
          <Card
            style={{ width: '12rem' }}
            key={index}
          >
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.poster}`} />
            <Card.Img />

            <Card.Text>{movie.title} </Card.Text>
            <Card.Text>Overview: {movie.overview} </Card.Text>
            <Card.Text>Movie Date: {movie.release_date} </Card.Text>
            <Card.Text>Popularity: {movie.popularity} </Card.Text>
            <Card.Text>Total Votes: {movie.totalVotes} </Card.Text>
            <Card.Text>Average Rank: {movie.vote_avg} </Card.Text>
          </Card>
        )}
      </>

    );
  }
}

export default MoviesP;


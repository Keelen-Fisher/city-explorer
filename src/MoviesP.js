import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component{
  render(){
    return(
    <Card>

      {this.props.movieState && this.props.movieState.map ((v,i) => 
      <Card.Text key={i}>
        {v.name} {v.overview}
      </Card.Text>
      )}

    </Card>
    );
  }
}

export default Movies
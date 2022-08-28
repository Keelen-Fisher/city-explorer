import React from 'react';
import Card from 'react-bootstrap/Card';

class MoviesP extends React.Component{
  render(){

    return(


    <Card style={{width: '18rem'}}>
    {/* <Card.Img src={this.props.value.imgUrl}/> */}
      <Card.Text>{this.props.value.title} </Card.Text>
      <Card.Text>{this.props.value.overview} </Card.Text>
      <Card.Text>{this.props.value.release_date} </Card.Text>
      <Card.Text>{this.props.value.popularity} </Card.Text>
      <Card.Text>{this.props.value.totalVotes} </Card.Text>
      <Card.Text>{this.props.value.vote_avg} </Card.Text>

    </Card>
    );
  }
}

export default MoviesP;
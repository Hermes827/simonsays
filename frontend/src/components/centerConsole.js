import React from 'react';
import Button from 'react-bootstrap/Button';

class CenterConsole extends React.Component{

  constructor(){
  super()
  this.state = {
    computerTurn: false,
    playerTurn: true
  };
}

computerMove = () => {
  this.setState({
    computerTurn: true,
    playerTurn: false
  })
  this.makeMove()
}

makeMove(){
  let randomNum = Math.floor(Math.random()*4) + 1
  let randomDiv = document.querySelector(`.div${randomNum}`)
  console.log(randomDiv)
}

  render(){
  return (
    <div>
    <div className="title">Simon</div>
    <Button onClick={this.computerMove}>play</Button>
    </div>
  );
}
}

export default CenterConsole

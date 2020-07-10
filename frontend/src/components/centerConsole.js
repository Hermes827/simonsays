import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
// import { assignDiv } from '../action/index.js';
// import { computerTurn } from '../action/index.js';
// import { computerMakeMove } from '../action/index.js'
// import { playerTurn } from '../action/index.js';
// import { success } from '../action/index.js';

class CenterConsole extends React.Component{

  constructor(){
  super()

  this.state = {
    computerTurn: false,
    playerTurn: false,
    currentPlayer: "",
    number: [],
    random: ""
  }

}

// computerMove = () => {
//   // this.props.computerTurn()
//   this.props.assignDiv()
//   this.props.playerTurn()
// }

// win(){
//   if(this.props.computerLastSequence[0] === this.props.playerLastSequence[0]){
//     this.props.success()
//     // this.computerMove()
//   }
// }

beginGame = () => {
  // this.setComputerTurn()
  this.computerActs()
  // this.setPlayerTurn()
}

computerActs(){
  let randomNum = Math.floor(Math.random()*4) + 1
  this.setState(
    {
    number: [...this.state.number, randomNum],
    playerTurn: true
  },
    function(){console.log(this.state.number.join())},
    setTimeout(() => this.playerActs(), 2000)
  )

   // function() { console.log("setState completed", this.state)})
}

playerActs(){
  if(this.state.playerTurn != true){return}
  let number = prompt("Please enter the right number");
  let intNumber = parseInt(number)
  if(number === this.state.number.join()){
    this.setState({
      playerTurn: false
    })
    setTimeout(() => this.computerActs(), 1000)
  } else {
    console.log("game over")
    this.setState({
      number: []
    })
  }
}

setComputerTurn(){
  this.setState({
    computerTurn: true,
    playerTurn: false
  })
}

setPlayerTurn(){
  this.setState({
    computerTurn: false,
    playerTurn: true
  })
}

playerActionTurn = () => {
  // if(this.state.computerTurn === true){return}
  this.playerActs()
}

showState = () => {
  console.log(this.state)
}

setPlayerTurn(){}

  render(){
  return (
    <div>
    <div className="title">Simon</div>
    <Button onClick={this.beginGame}>begin</Button>

    <Button onClick={this.showState}>show state</Button>
    </div>
  );
}
}

const mapDispatchToProps = {
  // assignDiv, computerTurn, computerMakeMove, playerTurn, success
};

const mapStateToProps = (state) => ({
  // isComputerTurn: state.isComputerTurn,
  // isPlayerTurn: state.isPlayerTurn,
  // computerLastSequence: state.computerLastSequence,
  // playerLastSequence: state.playerLastSequence,
  // hasSucceeded: state.hasSucceeded
})

export default connect(mapStateToProps, mapDispatchToProps)(CenterConsole);

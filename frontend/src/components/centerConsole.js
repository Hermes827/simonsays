import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { assignDiv } from '../action/index.js';
import { computerTurn } from '../action/index.js';
import { computerMakeMove } from '../action/index.js'
import { playerTurn } from '../action/index.js';
import { success } from '../action/index.js';

class CenterConsole extends React.Component{

  constructor(){
  super()
}

computerMove = () => {
  // this.props.computerTurn()
  this.props.assignDiv()
  this.props.playerTurn()
}

win(){
  if(this.props.computerLastSequence[0] === this.props.playerLastSequence[0]){
    this.props.success()
    // this.computerMove()
  }
}

  render(){
  return (
    <div>
    <div className="title">Simon</div>
    <Button onClick={this.computerMove}>play</Button>
    {console.log(this.props.computerLastSequence[0] === this.props.playerLastSequence[0])}
    {console.log(this.props.playerLastSequence)}
    {this.win()}
    </div>
  );
}
}

const mapDispatchToProps = {
  assignDiv, computerTurn, computerMakeMove, playerTurn, success
};

const mapStateToProps = (state) => ({
  isComputerTurn: state.isComputerTurn,
  isPlayerTurn: state.isPlayerTurn,
  computerLastSequence: state.computerLastSequence,
  playerLastSequence: state.playerLastSequence,
  hasSucceeded: state.hasSucceeded
})

export default connect(mapStateToProps, mapDispatchToProps)(CenterConsole);

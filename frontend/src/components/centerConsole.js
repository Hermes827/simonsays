import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { assignDiv } from '../action/index.js';
import { computerTurn } from '../action/index.js';
import { computerMakeMove } from '../action/index.js'
import { playerTurn } from '../action/index.js';

class CenterConsole extends React.Component{

  constructor(){
  super()
}

computerMove = () => {
  this.props.computerTurn()
  this.props.assignDiv()
  this.props.playerTurn()
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

const mapDispatchToProps = {
  assignDiv, computerTurn, computerMakeMove, playerTurn
};

const mapStateToProps = (state) => ({
  computerTurn: state.computerTurn,
  playerTurn: state.playerTurn
})

export default connect(mapStateToProps, mapDispatchToProps)(CenterConsole);

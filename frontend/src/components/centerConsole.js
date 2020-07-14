import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { computerActs } from '../action/index.js';
import { playerActs } from '../action/index.js';
import { scorePoint } from '../action/index.js';

class CenterConsole extends React.Component{

  delayComputer = () => {
    setTimeout(this.props.computerActs, 250)
  }

  render(){
  return (
    <div>
    <div className="title">Simon</div>
    {this.props.score}<br/>
  <Button onClick={(this.props.computerTurn) ? this.delayComputer : null}>begin</Button>
    </div>
  );
}
}

const mapDispatchToProps = {
  computerActs, playerActs, scorePoint
};

const mapStateToProps = (state) => ({
  playerTurn: state.playerTurn,
  computerTurn: state.computerTurn,
  computerPicks: state.computerPicks,
  playerPicks: state.playerPicks,
  score: state.score
})

export default connect(mapStateToProps, mapDispatchToProps)(CenterConsole);

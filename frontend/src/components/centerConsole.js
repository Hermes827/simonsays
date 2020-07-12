import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
// import { assignDiv } from '../action/index.js';
// import { computerTurn } from '../action/index.js';
// import { computerMakeMove } from '../action/index.js'
// import { playerTurn } from '../action/index.js';
// import { success } from '../action/index.js';
import { computerActs } from '../action/index.js';
import { playerActs } from '../action/index.js';
import { scorePoint } from '../action/index.js';
import { yo } from '../action/index.js';
import { wassup } from '../action/index.js';

class CenterConsole extends React.Component{

  render(){
  return (
    <div>
    <div className="title">Simon</div>
    <Button onClick={this.props.computerActs}>begin</Button>
    </div>
  );
}
}

const mapDispatchToProps = {
  computerActs, playerActs, scorePoint, yo, wassup
};

const mapStateToProps = (state) => ({
  playerTurn: state.playerTurn,
  computerTurn: state.computerTurn,
  computerPicks: state.computerPicks,
  playerPicks: state.playerPicks,
  score: state.score
})

export default connect(mapStateToProps, mapDispatchToProps)(CenterConsole);

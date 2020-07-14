import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { computerActs } from '../action/index.js';

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
  computerActs
};

const mapStateToProps = (state) => ({
  computerTurn: state.computerTurn,
  score: state.score
})

export default connect(mapStateToProps, mapDispatchToProps)(CenterConsole);

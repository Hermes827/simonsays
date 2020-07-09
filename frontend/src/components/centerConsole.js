import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { assignDiv } from '../action/index.js';

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
  if(randomDiv){
  this.props.assignDiv()
}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     addSignupData: formData => dispatch({ type: 'ADD_SIGNUP_DATA', payload: formData })
//   };
// };
//
// const mapStateToProps = (state) => ({
//   username: state.username,
//   password: state.password,
//   email: state.email,
//   currentUser: state.currentUser
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(CenterConsole);

const mapDispatchToProps = {
  assignDiv
};

const mapStateToProps = (state) => ({
  clicked: state.clicked
})

export default connect(mapStateToProps, mapDispatchToProps)(CenterConsole);

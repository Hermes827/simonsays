import React from 'react';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Signup from './signup.js'
import Login from './login.js'

class CenterConsole extends React.Component{

  constructor(){
  super()
  this.state = {
    text: '',
    signup: false,
    login: false
  };

  this.signup = this.signup.bind(this)
  this.login = this.login.bind(this)
  this.renderPage = this.renderPage.bind(this)
  // this.renderSignup = this.renderSignup.bind(this)
}

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };

  signup(e){
    this.setState({
      signup: true
    })
  }

  renderPage(e){
    if(this.state.signup === true){
      return(
        <Signup/>
      )
    } else if(this.state.login === true){
    return(
      <Login/>
    )
  } else {
      return(
        <>
        <div className="title">Simon</div>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.signup}>Sign Up</button>
        </>
      )
    }
  }

  login(){
    console.log("hi")
    this.setState({
      login: true
    })
  }

  renderLogin(){
    if(this.state.login === true){
      return(
        <Login/>
      )
    } else {
      return(
        <>
        <div className="title">Simon</div>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.signup}>Sign Up</button>
        </>
      )
    }
  }

  render(){
    let random = "login"
  return (
    <div>

      {this.renderPage()}
    </div>
  );
}
}

// <form onSubmit={event => this.handleSubmit(event)}>
//   <p>
//     <label>add todo</label>
//       <input
//         type="text"
//         onChange={event => this.handleChange(event)}
//         value={this.state.text}
//       />
//   </p>
//   <input type="submit" />
// </form>


const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};



export default connect(null, mapDispatchToProps)(CenterConsole);

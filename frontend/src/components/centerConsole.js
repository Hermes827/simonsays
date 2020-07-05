import React from 'react';
import Signup from './signup.js'
import Login from './login.js'
import Button from 'react-bootstrap/Button';

class CenterConsole extends React.Component{

  constructor(){
  super()
  this.state = {
    signup: false,
    login: false
  };

  this.signup = this.signup.bind(this)
  this.login = this.login.bind(this)
  this.renderPage = this.renderPage.bind(this)
  this.returnHome = this.returnHome.bind(this)
}

  signup(e){
    this.setState({
      signup: true
    })
  }

  login(){
    console.log("hi")
    this.setState({
      login: true
    })
  }

  returnHome(){
    this.setState({
      signup: false,
      login: false
    })
    return(
    <>
    <div className="title">Simon</div>
    <Button variant="outline-dark" onClick={this.login}>Log In</Button>
    <Button variant="outline-dark" onClick={this.signup}>Sign Up</Button>
    </>
    )
  }

  renderPage(e){
    if(this.state.signup === true){
      return(
        <Signup return={this.returnHome}/>
      )
    } else if(this.state.login === true){
    return(
      <Login return={this.returnHome}/>
    )
  } else {
      return(
        <>
        <div className="title">Simon</div>
        <Button variant="outline-dark" onClick={this.login}>Log In</Button>
        <Button variant="outline-dark" onClick={this.signup}>Sign Up</Button>
        </>
      )
    }
  }

  render(){
  return (
    <div>
      {this.renderPage()}
    </div>
  );
}
}

export default CenterConsole

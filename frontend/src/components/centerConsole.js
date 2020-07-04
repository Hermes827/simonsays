import React from 'react';
import Signup from './signup.js'
import Login from './login.js'

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
    <button onClick={this.login}>Log In</button>
    <button onClick={this.signup}>Sign Up</button>
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
  return (
    <div>
      {this.renderPage()}
    </div>
  );
}
}

export default CenterConsole

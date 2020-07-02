import React from 'react';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class CenterConsole extends React.Component{

  constructor(){
  super()
  this.state = {
    text: ''
  };
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

  signup = () => {
    console.log(this.props)
  }

  render(){
  return (
    <div>
      <div className="title">Simon</div>
      <button onClick={null}>Log In</button>
      <button onClick={this.signup}>Sign Up</button>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
              <input
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.text}
              />
          </p>
          <input type="submit" />
        </form>
    </div>
  );
}
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CenterConsole);

import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

class Login extends React.Component{
  constructor(){
    super()

    this.state = {
      username: "",
      password: "",
      email: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addLoginData(this.state);
  };

  render() {
    return (
      <div className="signup">
        <div className="form">
          <h1>Log In</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
            <label>Username:
              <input
                className="input"
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.username}
                name="username"
              />
            </label><br/>
            <label>Password:
              <input
                className="input"
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.password}
                name="password"
              />
            </label><br/>
            <label className="inputEmail">Email:
              <input
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.email}
                name="email"
              />
            </label><br/>
          <Button variant="outline-dark" type="submit">Login</Button><Button variant="outline-dark" onClick={this.props.return}>Cancel</Button>
        </form>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLoginData: formData => dispatch({ type: 'ADD_LOGIN_DATA', payload: formData })
  };
};

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  email: state.email
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

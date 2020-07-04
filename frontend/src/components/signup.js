import React from 'react';
import { connect } from 'react-redux';

class Signup extends React.Component{

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
    this.props.addSignupData(this.state);
  };

  render() {
    return (
      <div className="signup">
        <div className="form">
          <h1>Sign up!</h1>
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
          <input type="submit" /><button onClick={this.props.return}>Cancel</button>
        </form>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSignupData: formData => dispatch({ type: 'ADD_SIGNUP_DATA', payload: formData })
  };
};

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  email: state.email
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

import React from 'react';
import { connect } from 'react-redux';

class Signup extends React.Component{

  constructor(){
    super()

    this.state = {
      username: ''
    }
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.addSignupData(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>Username</label>
              <input
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.username}
              />
          </p>
          <input type="submit" />
        </form>
        {console.log(this.props)}
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
  username: state.username
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

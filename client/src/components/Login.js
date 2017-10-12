import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <form className="loginPage">
        <input
          className="Username"
          type="text"
          placeholder="Enter your username"
          onChange={this.props.handleUserNameInput} />
        <input
          className="Password"
          type="text"
          placeholder="Enter your Password"
          onChange={this.props.handlePasswordInput} />
        <button
          type="submit"
          className="loginButton"
          >
            Login
        </button>
      </form>
      )
  }
}

export default Login;


import React, { Component } from 'react';

class Register extends Component {
  render() {
    return(
      <form className="loginPage">
        <input
          className="Username"
          type="text"
          placeholder="Enter the username"
          onChange={this.props.handleUserNameInput} />
          <input
          className="Email"
          type="text"
          placeholder="Enter Email"
          onChange={this.props.handleEmailInput} />
        <input
          className="Password"
          type="text"
          placeholder="Choose a password"
          onChange={this.props.handlePasswordInput} />
        <button
          type="submit"
          className="loginButton"
          onChange={this.props.userRegistration} >
          Sign-up
        </button>
      </form>
      )
  }
}

export default Register;

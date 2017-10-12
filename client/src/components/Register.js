import React, { Component } from 'react';

class Register extends Component {
  render() {
    return(
      <form onSubmit={this.props.userRegistration} className="loginPage">
        <input
          className="Username"
          type="text"
          placeholder="Enter the username"
          onChange={this.props.handleUserNameInput} />
          <input
          className="Email"
          type="email"
          placeholder="Enter Email"
          onChange={this.props.handleEmailInput} />
        <input
          className="Password"
          type="password"
          placeholder="Choose a password"
          onChange={this.props.handlePasswordInput} />
        <button
          type="submit"
          className="loginButton">
          Sign-up
        </button>
      </form>
      )
  }
}

export default Register;

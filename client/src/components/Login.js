import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <form onSubmit={this.props.userLogin} className="loginPage">
        <input
          className="Username"
          type="text"
          placeholder="Enter your username"
          onChange={this.props.handleUserNameInput} />
        <input
          className="Password"
          type="password"
          placeholder="Enter your Password"
          onChange={this.props.handlePasswordInput} />
      <input
          type="submit"
          value="Log in" />
      </form>
      )
  }
}

export default Login;


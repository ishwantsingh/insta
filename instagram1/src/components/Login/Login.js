import React, { Component } from "react";
import styled, { css } from "styled-components";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = event => {
    const username = this.state.username;
    localStorage.setItem("username", username);
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <input
              name="username"
              type="text"
              placeholder="Enter Username"
              onChange={this.changeHandler}
              value={this.state.username}
            />
            <input
              name="password"
              type="text"
              placeholder="Enter Password"
              onChange={this.changeHandler}
              value={this.state.password}
            />
            <button
              type="submit"
              className="loginButton"
              onClick={this.submitForm}
            >
              Log In!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

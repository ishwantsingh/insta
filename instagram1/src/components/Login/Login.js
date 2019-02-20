import React, { Component } from "react";
import styled, { css } from "styled-components";
import logo from "../Login/ig_nameLogo.png";

const StyledLogo = styled.img`
  width: 50%;
  height: 20%;
  border-radius: 50%;
  margin: 30px 0 10px 0;
  padding: 5px;
`;

const StyledInput = styled.input`
  height: 10%;
  width: 70%;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(230, 230, 230);
  border-radius: 3px;
  margin: 0.5em auto;
  padding: 5px;
  display: flex;
  align-self: flex-start;
`;

const StyledLoginDiv = styled.div`
  background-color: rgb(250, 250, 250);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInsideDiv = styled.div`
  background-color: white;
  border: 1px solid rgb(230, 230, 230);
  height: 356px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  height: 100%;
  width: 100%;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledButton = styled.button`
  height: 15%;
  width: 75%;
  margin: 1.5em auto;
  background: rgb(56, 151, 240);
  border: 1px solid rgb(56, 151, 240);
  border-radius: 3px;
  color: white;
  padding: 0.25em 1em;
`;

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
      <StyledLoginDiv>
        <StyledInsideDiv>
          <StyledLogo src={logo} />
          <StyledForm>
            <StyledInput
              name="username"
              type="text"
              placeholder="Phone number, username, or email"
              onChange={this.changeHandler}
              value={this.state.username}
            />
            <StyledInput
              name="password"
              type="text"
              placeholder="Password"
              onChange={this.changeHandler}
              value={this.state.password}
            />
            <StyledButton type="submit" onClick={this.submitForm}>
              Log In!
            </StyledButton>
          </StyledForm>
        </StyledInsideDiv>
      </StyledLoginDiv>
    );
  }
}

export default Login;

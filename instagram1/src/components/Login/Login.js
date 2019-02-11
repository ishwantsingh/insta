import React from "react";

const login = event => props => {
  localStorage.setItem("username", "coolboi");
  localStorage.setItem("password", "coolboi");
  if (
    event.target.value === localStorage.getItem("username") &&
    event.target.value === localStorage.getItem("password")
  ) {
    localStorage.setItem("loggedIn", true);
  }
  localStorage.setItem("loggedIn", false);
};

export default login;

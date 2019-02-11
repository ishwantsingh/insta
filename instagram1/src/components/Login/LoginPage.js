import React from "react";
import login from "../Login/Login";

const LoginPage = props => {
  return (
    <div>
      <div>
        <form onSubmit={login}>
          <input name="username" type="text" placeholder="Enter Username" />
          <input name="password" type="text" placeholder="Enter Password" />
          <button type="submit" className="LoginButton">
            Log In!
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

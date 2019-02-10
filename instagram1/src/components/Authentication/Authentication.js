import React from "react";
import LoginPage from "../Login/Login";
import App from "../../App";

const Authenticate = App => LoginPage => props => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      this.setState({ loggedIn: localStorage.getItem("loggedIn") });
    }

    ConditionalRender = props => {
      if (this.loggedIn) {
        return <App />;
      }
      return <LoginPage />;
    };

    render() {
      console.log("auth render running");
      return <this.ConditionalRender />;
    }
  };
};

export default Authenticate(App)(LoginPage);

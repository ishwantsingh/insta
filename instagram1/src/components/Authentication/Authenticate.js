import React, { Component } from "react";

const Authenticate = App => Login => {
  return class extends Component {
    constructor(props) {
      console.log("why rent u runnin?");
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem("username")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (!this.state.loggedIn) return <App />;
      return <Login />;
    }
  };
};

export default Authenticate;

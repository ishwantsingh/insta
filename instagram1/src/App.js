import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.css";
import PropTypes from "prop-types";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {console.log(dummyData)} */}
        <div>
          <SearchBar />
        </div>
        <div>
          {dummyData.map((post, id) => (
            <PostContainer post={post} key={id} />
          ))}
        </div>

        {/* search bar */}
        {/* post container */}
        {/* comment section */}
      </div>
    );
  }
}

App.propTypes = {
  SearchBar: PropTypes.func,
  PostContainer: PropTypes.func
};

export default App;

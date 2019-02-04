import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.css";
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

export default App;

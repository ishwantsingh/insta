import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.css";
import PropTypes from "prop-types";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor running");
    this.state = {
      dummyData: [],
      post: [],
      comments5: [],
      newComment: []
    };
  }

  componentDidMount() {
    console.log("CDM is running");
    this.setState({ post: this.dummyData });
  }

  // changeHandler = event => {
  //   // console.log(this.state.inputText);
  //   this.setState({ [this.newComment]: event.target.value });
  //   // console.log(this.state.inputText);
  // };
  changeHandler = event => {
    // console.log(event.target.value);

    this.setState({ newComment: event.target.value });
    // console.log(this.state.newComment);
  };

  addNewComment = (event, index) => {
    event.preventDefault();
    console.log(this.state.comments5);
    this.setState({
      comments5: [
        ...this.state.comments5,
        {
          text: "test",
          index: { index }
        }
      ],
      newComment: ""
    });
  };

  render() {
    console.log("render running");
    return (
      <div className="App">
        {/* {console.log(dummyData)} */}
        <div>
          <SearchBar />
        </div>
        <div>
          {dummyData.map((post, id) => (
            <PostContainer
              post={post}
              key={id}
              addNewComment={this.addNewComment}
              index={this.idx}
              changeHandler={this.changeHandler}
              newComment={this.newComment}
              comments5={this.comments5}
            />
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

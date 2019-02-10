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
      post: [],
      comments5: [],
      newComment: [],
      likes: 0,
      clicked: false
    };
  }

  componentDidMount() {
    console.log("CDM is running");
    this.setState({ post: dummyData });
  }

  changeHandler = event => {
    // console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state.newComment);
  };

  addNewComment = (event, index) => {
    // console.log(this.state.post);
    event.preventDefault();
    //map post to get an new array
    let updatedPost = this.state.post.map((postItem, index) => {
      postItem.comments.push({
        username: "martinseludo",
        text: this.state.newComment,
        index: { index }
      });

      return postItem;
    });
    this.setState({
      post: updatedPost,
      newComment: ""
    });
  };

  likePost = event => {
    event.preventDefault();
    if (!this.state.clicked) {
      this.setState({
        clicked: true,
        likes: this.state.likes + 1
      });
    } else if (this.state.clicked) {
      this.setState({
        clicked: false,
        likes: this.state.likes - 1
      });
    }

    // {console.log(this.state.likes);}
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
              changeHandler={this.changeHandler}
              newComment={this.newComment}
              likePost={this.likePost}
              likes={this.state.likes}
            />
          ))}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  SearchBar: PropTypes.func,
  PostContainer: PropTypes.func
};

export default App;

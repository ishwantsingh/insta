import React, { Component } from "react";
import dummyData from "./dummy-data";
import PropTypes from "prop-types";
import PostsPage from "./components/PostContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBar";
import Authenticate from "./components/Authentication/Authenticate";
import Login from "./components/Login/Login";
import styled, { css } from "styled-components";

const StyledApp = styled.div`
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor running");
    this.state = {
      post: [],
      posts: [],
      comments5: [],
      newComment: [],
      likes: 0,
      clicked: false,
      filteredPosts: []
    };
  }

  componentDidMount() {
    console.log("CDM is running");
    this.setState({ post: dummyData, posts: dummyData });
  }

  searchPostsHandler = e => {
    // eslint-disable-next-line
    console.log("search running");
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
    // console.log(posts);
    console.log(this.state.filteredPosts);
  };

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
        username: localStorage.getItem("username"),
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

  // like function

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
  };

  render() {
    console.log("render running");
    return (
      <div>
        {/* <div>
          
        </div> */}
        <StyledApp>
          {/* {console.log(dummyData)} */}

          <SearchBar searchPosts={this.searchPostsHandler} />

          <div>
            {console.log("postPage rendering")}
            <PostsPage
              posts={
                this.state.filteredPosts.length > 0
                  ? this.state.filteredPosts
                  : this.state.posts
              }
              addNewComment={this.addNewComment}
              changeHandler={this.changeHandler}
              newComment={this.state.newComment}
              likePost={this.likePost}
              likes={this.state.likes}
              clicked={this.state.clicked}
            />
          </div>
        </StyledApp>
      </div>
    );
  }
}

App.propTypes = {
  SearchBar: PropTypes.func,
  PostsPage: PropTypes.func
};

export default Authenticate(App)(Login);

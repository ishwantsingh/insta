import React from "react";
import dummyData from "../../dummy-data";
// import PropTypes from "prop-types";
import PostContainer from "../PostContainer/PostContainer";

const PostsPage = props => {
  return (
    <div>
      <div>
        {props.posts.map((post, id) => (
          <PostContainer
            post={post}
            key={id}
            addNewComment={props.addNewComment}
            changeHandler={props.changeHandler}
            newComment={props.newComment}
            likePost={props.likePost}
            likes={props.likes}
            clicked={props.clicked}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

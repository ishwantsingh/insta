import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

function PostContainer(props) {
  return (
    <div className="postContainer">
      {/* {console.log(props)} */}
      <div className="userDiv">
        <img
          src={props.post.thumbnailUrl}
          className="thumbnails"
          alt="Thumbnail"
        />
        <h1 className="userName">{props.post.username}</h1>
      </div>
      <div className="postImage">
        <img
          src={props.post.imageUrl}
          className="pImages"
          alt="Post"
          //   width="100%"
        />
      </div>
      <div>
        {
          <CommentSection
            comments={props.post.comments}
            addNewComment={props.addNewComment}
            changeHandler={props.changeHandler}
            newComment={props.newComment}
          />
        }
        <hr />
      </div>
      {/* {console.log(props.displayComments)} */}
    </div>
  );
}

PostContainer.propTypes = {
  username: PropTypes.string,
  CommentSection: PropTypes.func
};

export default PostContainer;

import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

function PostContainer(props) {
  return (
    <div className="postContainer">
      {/* {console.log(props)} */}
      <div className="userDiv">
        <img
          src={props.post.thumbnailUrl}
          className="thumbnails"
          alt="Thumbnail Image"
        />
        <h1 className="userName">{props.post.username}</h1>
      </div>
      <div className="postImage">
        <img src={props.post.imageUrl} className="pImages" alt="Post Image" />
      </div>
      <div>
        {<CommentSection comments={props.post.comments} />} <hr />
      </div>
    </div>
  );
}

export default PostContainer;

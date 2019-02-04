import React from "react";
import "./CommentSection.css";

function CommentSection(props) {
  return (
    <div>
      {/* {console.log(props.comments[0].username)} */}

      <div className="postComment">
        <div className="postCommentEach">
          <h1>{props.comments[0].username}</h1>
          <h3>{props.comments[0].text}</h3>
        </div>
        <div className="postCommentEach">
          <h1>{props.comments[1].username}</h1>
          <h3>{props.comments[1].text}</h3>
        </div>
        <div className="postCommentEach">
          <h1>{props.comments[2].username}</h1>
          <h3>{props.comments[2].text}</h3>
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Comment here!"
          className="commentInput"
        />
      </div>
    </div>
  );
}

export default CommentSection;

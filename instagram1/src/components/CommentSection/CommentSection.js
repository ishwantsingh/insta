import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

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
        <form onSubmit={props.addNewComment}>
          <input
            type="text"
            placeholder="Comment here!"
            className="commentInput"
            onChange={props.changeHandler}
            value={props.newComment}
          />
          <button type="submit" onClick={props.addNewComment}>
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
}

CommentSection.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default CommentSection;

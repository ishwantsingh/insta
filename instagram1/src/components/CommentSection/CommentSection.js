import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

function CommentSection(props) {
  return (
    <div>
      {/* {console.log(props.comments[0].username)} */}

      <div>
        {/* <div className="postCommentEach">
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
        </div> */}
        <div className="postComment">
          {console.log(props.displayComments)}
          <h1 className="postCommentEach">
            {props.displayComments.map((comment, index) => (
              <div key={index} className="singleUser">
                {comment.comments[index].username}:
              </div>
            ))}
          </h1>
          <h3 className="postCommentEach">
            {props.displayComments.map((comment, index) => (
              <div key={index} className="singleText">
                {comment.comments[index].text}
              </div>
            ))}
          </h3>
        </div>
      </div>

      <div>
        <form>
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

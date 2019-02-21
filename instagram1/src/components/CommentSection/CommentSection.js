import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const PostComment = styled.div`
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  align-content: center;
`;

const PostCommentEach = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: baseline;
  align-self: center;
  justify-content: flex-start;
  width: 100%;
  margin: 3px 5px 3px 5px;
`;

const SingleUser = styled.h1`
  font-size: 19px;
  font-weight: bold;
  margin: 0 10px 0 0;
`;

const SingleText = styled.h1`
  font-size: 19px;
  font-weight: normal;
  margin: 0 15px 0 0;
`;

const CommentInput = styled.input`
  width: 94%;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  border-top: 1px solid rgb(230, 230, 230);
  margin: 10px 10px 23px 10px;
  padding: 20px 0 0 0;
  outline: none;
`;

const AddCommentButton = styled.button`
  display: none;
`;

const TimeStampH1 = styled.h1`
  margin-left: 8px;
  font-size: 14px;
  font-weight: normal;
  color: rgb(180, 180, 180);
`;

function CommentSection(props) {
  return (
    <div>
      {/* {console.log(props.comments[0].username)} */}

      <div>
        <PostComment>
          {/* {console.log(props.displayComments)} */}

          {props.comments.map((comment, index) => (
            <PostCommentEach key={index}>
              <SingleUser key="user index">{comment.username}</SingleUser>
              <SingleText key="text index">{comment.text}</SingleText>
            </PostCommentEach>
          ))}
        </PostComment>
      </div>
      <TimeStampH1>{props.post.timestamp}</TimeStampH1>
      <div>
        <form>
          <CommentInput
            type="text"
            placeholder=" Add a comment..."
            name="newComment"
            onChange={props.changeHandler}
            value={props.newComment}
          />
          <AddCommentButton type="submit" onClick={props.addNewComment}>
            Add Comment
          </AddCommentButton>
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

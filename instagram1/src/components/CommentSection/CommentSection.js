import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledPostComment = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem;
  align-content: center;
`;

const StyledPostCommentEach = styled.h1`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const StyledSingleUser = styled.div`
  font-size: 23px;
  margin: 10px 10px 10px 0;
`;

const StyledSingleText = styled.div`
  display: flex;
  justify-self: flex-start;
  font-size: 17px;
  margin: 15px 15px 15px 0;
`;

const StyledCommentInput = styled.input`
  margin: 5px 0 10px 0;
`;

function CommentSection(props) {
  return (
    <div>
      {/* {console.log(props.comments[0].username)} */}

      <div>
        <StyledPostComment>
          {/* {console.log(props.displayComments)} */}
          <StyledPostCommentEach>
            {props.comments.map((comment, index) => (
              <StyledSingleUser key={index}>
                {comment.username}:
              </StyledSingleUser>
            ))}
          </StyledPostCommentEach>
          <StyledPostCommentEach>
            {props.comments.map((comment, index) => (
              <StyledSingleText key={index}>{comment.text}</StyledSingleText>
            ))}
          </StyledPostCommentEach>
        </StyledPostComment>
      </div>

      <div>
        <form>
          <StyledCommentInput
            type="text"
            placeholder="Comment here!"
            name="newComment"
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

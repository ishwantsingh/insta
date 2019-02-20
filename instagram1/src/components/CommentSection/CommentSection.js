import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledPostComment = styled.div`
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  align-content: center;
`;

const StyledPostCommentEach = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: baseline;
  align-self: center;
  justify-content: flex-start;
  width: 100%;
  margin: 3px 5px 3px 5px;
`;

const StyledSingleUser = styled.h1`
  font-size: 19px;
  font-weight: bold;
  margin: 0 10px 0 0;
`;

const StyledSingleText = styled.h1`
  font-size: 19px;
  font-weight: normal;
  margin: 0 15px 0 0;
`;

const StyledCommentInput = styled.input`
  width: 94%;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  border-top: 1px solid rgb(230, 230, 230);
  margin: 10px 10px 23px 10px;
  padding: 20px 0 0 0;
`;

const AddCommentButton = styled.button`
  display: none;
`;

function CommentSection(props) {
  return (
    <div>
      {/* {console.log(props.comments[0].username)} */}

      <div>
        <StyledPostComment>
          {/* {console.log(props.displayComments)} */}

          {props.comments.map((comment, index) => (
            <StyledPostCommentEach>
              <StyledSingleUser key={index}>
                {comment.username}
              </StyledSingleUser>
              <StyledSingleText key={index}>{comment.text}</StyledSingleText>
            </StyledPostCommentEach>
          ))}
        </StyledPostComment>
      </div>
      <div>
        <form>
          <StyledCommentInput
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

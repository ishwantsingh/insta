import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledThumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px 0 0;
`;

const StyledUserDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  width: 100%;
`;

const StyledUsername = styled.h1`
  font-size: 23px;
`;

const StyledPost = styled.div`
  width: 100%;
`;

const StyledPostImage = styled.img`
  width: 100%;
`;

const StyledLikeDiv = styled.div`
  display: flex;
`;

const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function PostContainer(props) {
  return (
    <StyledPostContainer>
      {/* {console.log(props)} */}
      <StyledUserDiv>
        <StyledThumbnail src={props.post.thumbnailUrl} alt="Thumbnail" />
        <StyledUsername>{props.post.username}</StyledUsername>
      </StyledUserDiv>
      <StyledPost>
        <StyledPostImage
          src={props.post.imageUrl}
          alt="Post"
          //   width="100%"
        />
      </StyledPost>
      <StyledLikeDiv>
        <h1>{props.likes} Likes!</h1>
        <button onClick={props.likePost}>Like!</button>
      </StyledLikeDiv>
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
    </StyledPostContainer>
  );
}

PostContainer.propTypes = {
  username: PropTypes.string,
  CommentSection: PropTypes.func
};

export default PostContainer;

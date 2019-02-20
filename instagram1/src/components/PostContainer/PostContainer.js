import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import likeButton from "../PostContainer/likeIcon.png";
import commentButton from "../PostContainer/commentIcon.png";
import likedButton from "../PostContainer/lickedIcon.png";

const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px 0 0;
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0.2rem 1rem;
  width: 100%;
`;

const Username = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;

const Post = styled.div`
  width: 100%;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 2px;
`;

const LikeDiv = styled.div`
  margin: 0 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledPostContainer = styled.div`
  width: 680px;
  border: 1px solid rgb(230, 230, 230);
  margin: 60px auto;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const LikeButton = styled.img`
  width: 7%;
  height: 7%;
`;
const LikeButtonRed = styled.img`
  width: 7%;
  height: 7%;
`;

const CommentButton = styled.img`
  width: 7.6%;
  height: 7.6%;
`;

const LikeNum = styled.h6`
  font-size: 20px;
  margin: 0 15px;
`;

function PostContainer(props) {
  return (
    <StyledPostContainer>
      {/* {console.log(props)} */}
      <UserDiv>
        <Thumbnail src={props.post.thumbnailUrl} alt="Thumbnail" />
        <Username>{props.post.username}</Username>
      </UserDiv>
      <Post>
        <PostImage
          src={props.post.imageUrl}
          alt="Post"
          //   width="100%"
        />
      </Post>
      <LikeDiv>
        <div>
          {console.log(props.clicked)}
          {props.clicked ? (
            <LikeButtonRed src={likedButton} onClick={props.likePost} />
          ) : (
            <LikeButton src={likeButton} onClick={props.likePost} />
          )}
          <CommentButton src={commentButton} />
        </div>
        <LikeNum>{props.post.likes + props.likes} likes</LikeNum>
      </LikeDiv>
      <div>
        {
          <CommentSection
            comments={props.post.comments}
            addNewComment={props.addNewComment}
            changeHandler={props.changeHandler}
            newComment={props.newComment}
            post={props.post}
          />
        }
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

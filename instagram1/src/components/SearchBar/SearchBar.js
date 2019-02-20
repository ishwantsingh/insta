import React from "react";
import image1 from "../SearchBar/ig_search_bar.png";
import "./SearchBar.css";
import instaIcon from "../SearchBar/instaIcon.png";
import heartIcon from "../SearchBar/heartIcon.png";
import personIcon from "../SearchBar/personIcon.png";
import circleIcon from "../SearchBar/circleIcon.png";
import logo from "../SearchBar/ig_nameLogo.png";
import styled, { css } from "styled-components";

// import PropTypes from "prop-types";

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0;
  border: 1px solid rgb(230, 230, 230);
  background-color: white;
`;

const StyledLogos = styled.div`
  display: flex;
  padding: 0 0 0 30px;
  align-items: center;
`;

const InstaIcon = styled.img`
  width: 31.438px;
  height: 31.438px;
`;

const VerticalRule = styled.h1`
  margin: 0 20px;
  font-size: 25px;
`;

const InstaLogo = styled.img`
  width: 94.328px;
  height: 33.672px;
`;

const StyledInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SearchInput = styled.input`
  height: 20px;
  width: 250px;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(230, 230, 230);
  border-radius: 3px;
  margin: 0.5em auto;
  padding: 5px;
  display: flex;
  align-self: flex-start;
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 220px;
`;

const HeartIcon = styled.img`
  width: 38.19px;
  height: 38.19px;
`;

const PersonIcon = styled.img`
  width: 38.19px;
  height: 38.19px;
`;

const CircleIcon = styled.img`
  width: 38.19px;
  height: 38.19px;
`;

function SearchBar(props) {
  return (
    <StyledSearchBar>
      <StyledLogos>
        <InstaIcon src={instaIcon} />
        <VerticalRule>|</VerticalRule>
        <InstaLogo src={logo} />
      </StyledLogos>
      <StyledInput>
        <SearchInput placeholder="                            Search" />
      </StyledInput>
      <StyledIcons>
        <CircleIcon src={circleIcon} />
        <HeartIcon src={heartIcon} />
        <PersonIcon src={personIcon} />
      </StyledIcons>
    </StyledSearchBar>
  );
}

// SearchBar.propTypes = {

// }

export default SearchBar;

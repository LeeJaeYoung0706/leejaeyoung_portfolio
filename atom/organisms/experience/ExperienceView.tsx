"use client"
import React from 'react';
import styled from "styled-components";


const ExperienceViewStyle = styled.section`
  background-color: ${props => props.theme.palette.reverse};
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("/project_background.jpg");
    background-attachment: fixed;
    background-position: 38%, 50%;
    opacity: 0.5;
    filter: grayscale(90%);
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 105%;
    min-height: 100vh;
    background: linear-gradient(
        to top,
        ${props => props.theme.palette.reverse},
        rgba(3, 3, 3, 0.19) 97%
    );
    bottom: -10px;
    position: absolute;
  }

  ${(props) => props.theme.media.tablet} {
    &:before {
      width: 100%;
    }

  }

  ${(props) => props.theme.media.mobile} {
    &:after {
      width: 100%;
    }
  }

`
/**
 * AboutMe View
 * @param children
 * @constructor
 */
function ExperienceView({children}: AboutMeViewPropsInterface): React.JSX.Element {
  return (
    <ExperienceViewStyle>
      {children}
    </ExperienceViewStyle>
  )
}

export default React.memo(ExperienceView)
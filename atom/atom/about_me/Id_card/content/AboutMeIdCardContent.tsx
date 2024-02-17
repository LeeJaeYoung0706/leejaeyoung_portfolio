"use client"
import React from "react";
import styled from "styled-components";
import {ContentFontSizeMobile, ContentFontSizePC, ContentFontSizeTablet} from "@/styles/commonStyles";
import {NanumGodicFont} from "@/styles/font/fontStyle";

const AboutMeIdCardContentStyle = styled.p`
  ${ContentFontSizePC};
  color: ${(props => props.theme.palette.primary)};

  ${(props) => props.theme.media.tablet} {
    ${ContentFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${ContentFontSizeMobile};
  }

  & a {
    padding: 8px;
    border-radius: 4px;
    ${ContentFontSizePC};
    background-color: ${props => props.theme.palette.reverse70};
    color: ${(props) => props.theme.palette.primary70};
    font-weight: bold;
    border: 1px solid ${props => props.theme.palette.primary70};
    
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: ${(props) => props.theme.palette.primary};
        background-color: ${props => props.theme.palette.second};
        //opacity: 0.9;
      }
    }

    ${(props) => props.theme.media.tablet} {
      max-width: 200px;
      ${ContentFontSizeTablet};
    }

    ${(props) => props.theme.media.mobile} {
      max-width: 200px;
      ${ContentFontSizeMobile};
    }
  }

  & a:hover {
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: ${(props) => props.theme.palette.primary};
        background-color: ${props => props.theme.palette.reverse};
        border: 1px solid ${props => props.theme.palette.primary};
      }
    }
  }

  & a:active {
    color: ${(props) => props.theme.palette.primary};
    background-color: ${props => props.theme.palette.reverse};
    border: 1px solid ${props => props.theme.palette.primary};
    opacity: 0.9;
  }
`


/**
 * About Me 내용 부분
 * @param content => 내용 html 요소로 보냅니다.
 * @constructor
 */
function AboutMeIdCardContent({content}: AboutMeIdCardContentPropsInterface): React.JSX.Element {
  return (
    <AboutMeIdCardContentStyle
      className={NanumGodicFont.className}
      dangerouslySetInnerHTML={{__html: content}}
    />
  )
}

export default React.memo(AboutMeIdCardContent)
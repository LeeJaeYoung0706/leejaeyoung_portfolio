'use client'
import React from "react";
import styled, {css} from "styled-components";
import {LargeTitleFontSizeMobile, LargeTitleFontSizePC, LargeTitleFontSizeTablet} from "@/styles/commonStyles";
import {RussoOneFont} from "@/styles/font/fontStyle";
import PTag from "@/atom/atom/PTag";


const ProjectTitleLiStyle = styled.li<{$checked: boolean}>`
  ${props => props.$checked ?
          css`flex: 1;
            color: ${props.theme.palette.middle};

            & > p {
              font-weight: bold;
            }
          ;
            border-radius: 2px;
            border-bottom: 1px solid ${props => props.theme.palette.second};
            background-color: ${props => props.theme.palette.reverse};
          `
          : css` flex: 1;
            color: ${props.theme.palette.primary};
            background-color: ${props => props.theme.palette.reverse70};
          `}
  text-align: center;
  cursor: pointer;
  z-index: 350;

  ${(props) => props.theme.media.tablet} {
    flex: none;
    width: 30%;
    padding-bottom: 10px;
  }

  ${(props) => props.theme.media.mobile} {
    flex: none;
    width: 40%;
    min-width: 160px;
    padding-bottom: 6px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => !props.$checked && props.theme.palette.reverseSecond};
    }
  }

  &:active {
    color: ${(props) => !props.$checked && props.theme.palette.reverseSecond};
  }
`


/**
 *
 * @param title 타이틀 텍스트
 * @param checked 프로젝트 선택 여부
 * @param liOnClick 프로젝트 선택 콜백 함수
 * @constructor
 */
function ProjectTitleLiView ({title  , checked , liOnClick }: ProjectTitleLiViewPropsInterface) : React.JSX.Element {
    return (
        <ProjectTitleLiStyle
            id={`${title}_project`}
            $checked={checked}
            onClick={liOnClick}
        >
            <PTag font={RussoOneFont.className} content={title} $styles={css`
              ${LargeTitleFontSizePC};
              ${(props) => props.theme.media.tablet} {
                ${LargeTitleFontSizeTablet};
              }

              ${(props) => props.theme.media.mobile} {
                ${LargeTitleFontSizeMobile};
              }
            `} />
        </ProjectTitleLiStyle>
    )
}

export default React.memo(ProjectTitleLiView)
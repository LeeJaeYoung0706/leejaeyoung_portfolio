import React from 'react';
import Link from "next/link";
import styled, {css, RuleSet} from "styled-components";
import {
  ContentFontSizeMobile,
  ContentFontSizePC,
  ContentFontSizeTablet,
  DisplayFlexContainer
} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";
import {NanumGodicFont} from "@/styles/font/fontStyle";
import PTag from "@/atom/atom/PTag";


const LinkOutSideStyle = styled(DisplayFlexContainer(flexDirectionEnum.r , justifyContentEnum.c , alignItemsEnum.c))<{$area: RuleSet<Object>}>`
  ${props => props.$area};
  width: 100%;
  margin-top: 230px;
`

const PStyle = css`
  ${ContentFontSizePC};
  color: ${(props) => props.theme.palette.second};
  font-weight: bold;

  ${(props) => props.theme.media.tablet} {
    ${ContentFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${ContentFontSizeMobile};
  }

`

const LinkStyle = styled(Link)`
  text-align: center;
  padding: 30px;
  background-color: ${props => props.theme.palette.reverse70};
  border-bottom: 1px solid  ${props => props.theme.palette.second};
  border-top: 1px solid  ${props => props.theme.palette.second};

  
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.palette.reverseSecond};
      background-color: ${props => props.theme.palette.reverse};
    }
  }

  ${(props) => props.theme.media.tablet} {
    max-width: 200px;
    &:active {
      color: ${(props) => props.theme.palette.reverseSecond};
      background-color: ${props => props.theme.palette.reverse};
      opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.mobile} {
    max-width: 200px;
    &:active {
      color: ${(props) => props.theme.palette.middle};
      background-color: ${props => props.theme.palette.primary};
      opacity: 0.9;
    }
  }
`


/**
 * 관련 링크 바로가기
 * @param link => route
 * @param $area => 그리드 area 지정
 * @constructor
 */
export default function ProjectLinkTag({link , $area}: ProjectLinkTagInterface) {
    return (
        <LinkOutSideStyle $area={$area}>
            <LinkStyle href={link}
                       target="_blank"
                       rel="noopener noreferrer"
            >
              <PTag
                content={`READ MOREㅤ>`}
                $styles={PStyle}
                font={NanumGodicFont.className}
              />
            </LinkStyle>
        </LinkOutSideStyle>
    )
}
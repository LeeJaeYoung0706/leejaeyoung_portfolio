import React from "react";
import styled, {css, DefaultTheme, keyframes} from "styled-components";
import {commonAnimation, DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/types/enum";
import IntroSvgPC from "@/public/IntroSvgPC.svg";
import {RussoOneFont} from "@/styles/font/fontStyle";


const IntroSVG = styled(IntroSvgPC)`
`

const introSvgKeyframes = (theme: DefaultTheme) => keyframes`
  0% {
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    fill:  ${theme.palette.middle};
    stroke:  ${theme.palette.middle};
    stroke-width: 0.6;
  }
  50% {
    fill: rgba(72, 138, 204, 0);
    stroke:  ${theme.palette.second};
    stroke-width: 0.5;
  }
  80% {
    fill: rgba(169, 180, 185, 0);
    stroke:  ${theme.palette.primary};
  }
  100% {
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    fill:   ${theme.palette.primary};
    stroke:  ${theme.palette.primary};
    stroke-width: 0.3;
  }
`

const IntroSvgLayoutStyle = styled(DisplayFlexContainer(flexDirectionEnum.r , justifyContentEnum.c , alignItemsEnum.c))`
  position: relative;
  font-size: 30px;
  width: 100%;
  height: 105vh;
  ${props => commonAnimation(css`${introSvgKeyframes(props.theme)} 8s infinite alternate`)}
  
  &:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-image: url('/intro_background.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: 0, 10%;
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 300px;
    background: linear-gradient(0deg, ${props => props.theme.palette.reverse}, rgba(0, 0, 0, 0) 100%);
    bottom: -10px;
    position: absolute;
  }

  ${(props) => props.theme.media.tablet} {
    min-height: 700px;
    background-position: 50%, 50%;
    font-size: 40px;
  }


  ${(props) => props.theme.media.mobile} {
    min-height: 370px;
    background-position: 55%, 50%;
    font-size: 37px;
  }
`;

function IntroImage(): React.JSX.Element {
  return (
    <IntroSvgLayoutStyle className={RussoOneFont.className}>
      <IntroSVG>
        <text x="40%" y="30%" dy="25px" textAnchor="middle">WEB/APP</text>
        <text x="52%" y="52%" dy="25px" textAnchor="middle">APPLICATION</text>
        <text x="51%" y="72%" dy="30px" textAnchor="middle">DEVELOPER</text>
      </IntroSVG>
    </IntroSvgLayoutStyle>
  )
}

export default React.memo(IntroImage)
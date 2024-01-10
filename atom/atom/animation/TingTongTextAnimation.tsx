import React from "react";
import styled, {css, keyframes} from "styled-components";
import {DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";


const TextAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  30% {
    transform: translate3d(0, 0, 0);
  }
  45% {
    transform: translate3d(0, -4rem, 0);
  }
  59% {
    transform: translate3d(0, -4rem, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`

const TextStyle = styled.div<{ $content: string, $visible: boolean , $index: number }>`
  color: ${props => props.theme.palette.second};
  font-size: 40px;
  font-weight: 700;
  bottom: 0;
  text-align: center;
  ${props => props.$visible && css` animation: ${TextAnimation} 1050ms ease-in normal;`};
  transform: translatez(0);
  flex: 1;

  ${(props) => props.theme.media.tablet} {
    font-size: 36px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 34px;
  }

  ${props => {
    return css`animation-delay: ${props.$index * 200}ms`;
  }
}}
`

const TextFlexStyle = styled(DisplayFlexContainer(flexDirectionEnum.r , justifyContentEnum.c , alignItemsEnum.c))`
  width: 70%;
  padding-bottom: 150px;
`
const TingTongTextAnimation = React.forwardRef(({visible , content} : ProjectTextAnimationPropsInterface , ref: React.ForwardedRef<HTMLDivElement>) => {

  return (
    <TextFlexStyle ref={ref}>
      {
        content?.length > 0 &&
        content?.map((value, index) => {
          return  <TextStyle $content={value} $visible={visible} key={`${value}_textAnimation`} $index={index}>{value}</TextStyle>
        })
      }
    </TextFlexStyle>
  )
})

TingTongTextAnimation.displayName = "ProjectTextAnimation";
export default React.memo(TingTongTextAnimation)
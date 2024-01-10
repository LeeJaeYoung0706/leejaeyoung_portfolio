import React from 'react';
import styled, {css, keyframes, RuleSet} from "styled-components";
import {commonAnimation, DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";
import {AreaBack, areaCommonCSS, AreaEtc} from "@/atom/molecules/stack/grid/StackGridAreaStyle";
import {StackGridAreaViewPropsInterface} from "@/@types/molecules";



const pcGridAnimation = keyframes`
  0% {
    transform: translateY(200px);
  }
  50% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
`

const mobileRightGridAnimation = keyframes`
  0% {
    transform: translateX(150px);
  }
  100% {
    transform: translateX(0);
  }
`

const mobileLeftGridAnimation = keyframes`
  0% {
    transform: translateX(-150px);
  }
  100% {
    transform: translateX(0);
  }
`

const StackAreaStyle = styled(DisplayFlexContainer(flexDirectionEnum.c , justifyContentEnum.fs , alignItemsEnum.fs))<{ $stackVisible: boolean, $area: RuleSet<Object> }>`
  gap: 40px;
  z-index: 200;
  ${props => props.$area};
  ${areaCommonCSS};
  ${(props) => !props.$stackVisible ? css`opacity: 0.3;` : css`opacity: 1;`};
  ${(props) => props.$stackVisible && commonAnimation(css`${pcGridAnimation} ${props.$area === AreaBack ? 1.4 : props.$area === AreaEtc ? 1.8 : 1}s normal linear;`)};
  background-color: ${props => props.theme.palette.reverse};
  opacity: 0.9;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }

  ${(props) => props.theme.media.tablet} {
    min-width: 600px;
    ${(props) => props.$stackVisible && commonAnimation(css`${props.$area === AreaBack ? mobileRightGridAnimation : mobileLeftGridAnimation} 1s normal linear;`)};
    width: 100%;
    opacity: 1;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 360px;
    ${(props) => props.$stackVisible && commonAnimation(css`${props.$area === AreaBack ? mobileRightGridAnimation : mobileLeftGridAnimation} 1s normal linear;`)};
    width: 100%;
    opacity: 1;
  }
`

const StackGridAreaView = React.forwardRef(({children , $stackVisible , $area} : StackGridAreaViewPropsInterface, ref: React.ForwardedRef<HTMLDivElement>) => {

  return(
    <StackAreaStyle $stackVisible={$stackVisible} ref={ref} $area={$area} >
      {children}
    </StackAreaStyle>
  );
});

StackGridAreaView.displayName = "StackGridAreaView";
export default React.memo(StackGridAreaView);
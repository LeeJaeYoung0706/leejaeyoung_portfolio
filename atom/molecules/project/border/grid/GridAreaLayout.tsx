import React, {useRef} from "react";
import styled, {css, keyframes, RuleSet} from "styled-components";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import {FunctionsGrid, IntroductionGrid} from "@/atom/molecules/project/border/grid/StyleGridArea";
import {DisplayFlex} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";

/**
 * Stack Grid 태블릿 환경 애니메이션
 */
const rightGridAnimation = keyframes`
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
`

/**
 * Stack Grid 태블릿 환경 애니메이션
 */
const leftGridAnimation = keyframes`
  0% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0);
  }
`
/**
 * Stack Grid 모바일 환경 애니메이션
 */
const mobileRightGridAnimation = keyframes`
  0% {
    transform: translateX(150px);
  }
  100% {
    transform: translateX(0);
  }
`

/**
 * Stack Grid 모바일 환경 애니메이션
 */
const mobileLeftGridAnimation = keyframes`
  0% {
    transform: translateX(-150px);
  }
  100% {
    transform: translateX(0);
  }
`

const GridLayoutStyle = styled.div<{
  $stackVisible: boolean, $area: RuleSet<Object>, $checked: boolean
}>`
  ${props => props.$area};
  gap: 5px;
  ${DisplayFlex(flexDirectionEnum.c, justifyContentEnum.fs, alignItemsEnum.c)};
  align-content: flex-start;
  height: 100%;
  width: 100%;
    //background-color: ${props => (props.$area === IntroductionGrid || props.$area === FunctionsGrid) ? props.theme.palette.primary : props.theme.palette.second};
  ${(props) => (props.$stackVisible && !props.$checked) && css`animation: ${(props.$area === IntroductionGrid || props.$area === FunctionsGrid) ? rightGridAnimation : leftGridAnimation} 0.5s normal linear;`};
  ${(props) => !props.$stackVisible ? css`opacity: 0;` : css`opacity: 1;`};

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    ${DisplayFlex(flexDirectionEnum.c, justifyContentEnum.c, alignItemsEnum.c)};
    ${(props) => (props.$stackVisible && !props.$checked) && css`animation: ${(props.$area === IntroductionGrid || props.$area === FunctionsGrid) ? mobileRightGridAnimation : mobileLeftGridAnimation} 0.5s normal linear;`}
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    min-width: 360px;
    ${(props) => (props.$stackVisible && !props.$checked) && css`animation: ${(props.$area === IntroductionGrid || props.$area === FunctionsGrid) ? mobileRightGridAnimation : mobileLeftGridAnimation} 0.5s normal linear;`}
  }
`

/**
 * X 축 그리드
 * @param $stackVisible
 * @param $area
 * @param $ani_sec
 * @param children
 * @constructor
 */
function GridAreaLayout({$area, children, $checked}: GridAreaLayoutPropsInterface): React.JSX.Element {

  //visible 체크를 위한 ref
  const ref = useRef<HTMLDivElement | null>(null)
  const [entry, targetId, visible] = useIntersectionObserver(ref, {
    threshold: 0.01,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: true,
  })

  return (
    <GridLayoutStyle $stackVisible={visible} $area={$area} $checked={$checked} ref={ref}>
      {children}
    </GridLayoutStyle>
  )
}

export default React.memo(GridAreaLayout)
import React, {useRef} from "react";
import styled, {RuleSet} from "styled-components";
import {AcademyGrid, OnlineGrid, UniversityGrid} from "@/atom/molecules/education/EducationStyle";
import {DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";


const EducationAreaLayoutStyle = styled(DisplayFlexContainer(flexDirectionEnum.r , justifyContentEnum.sb , alignItemsEnum.fs))<{
  $stackVisible: boolean, $area: RuleSet<Object>
}>`
  ${props => props.$area};
  gap: 80px;
  align-content: flex-start;
  height: 100%;
  width: 100%;
  background-color: ${props => props.$area === UniversityGrid ? props?.theme.palette.reverseSecond70 
          : props.$area === OnlineGrid ?  props?.theme.palette.middle70 :  props.$area === AcademyGrid ? props?.theme.palette.second70 : props?.theme.palette.reverse70
  };

  ${(props) => props.theme.media.tablet} {
    width: 100%;

  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    padding-bottom: 40px;
  }
`


/**
 * Education Area
 * @param $area area 설정을 위한 css
 * @param children
 * @param $delay 에니메이션 딜레이
 * @constructor
 */
function EducationArea({$area, children }: EducationAreaPropsInterface): React.JSX.Element {

  //visible 체크를 위한 ref
  const ref = useRef<HTMLDivElement | null>(null)
  const [entry, targetId, visible] = useIntersectionObserver(ref, {
    threshold: 0.01,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: false,
  })

  return (
    <EducationAreaLayoutStyle $stackVisible={visible} $area={$area} ref={ref}>
      {children}
    </EducationAreaLayoutStyle>
  )
}

export default React.memo(EducationArea)
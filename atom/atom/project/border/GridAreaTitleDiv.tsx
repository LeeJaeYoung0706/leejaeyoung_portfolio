import React from "react";
import styled, {css} from "styled-components";
import {NanumGodicFont} from "@/styles/font/fontStyle";
import {
  DisplayFlex,
  MiddleTitleFontSizeMobile,
  MiddleTitleFontSizePC,
  MiddleTitleFontSizeTablet
} from "@/styles/commonStyles";
import PTag from "@/atom/atom/PTag";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";


const TitleDivStyle = styled.div<{ $position: boolean }>`

  padding: 15px;
  overflow-x: hidden;
  min-width: 300px;
  width: 100%;
  font-weight: bold;
  height: 100%;
  ${props => props?.$position ? DisplayFlex(flexDirectionEnum.r, justifyContentEnum.fs, alignItemsEnum.c) :
          DisplayFlex(flexDirectionEnum.r, justifyContentEnum.fe, alignItemsEnum.c)};
  
`

const TitlePStyle = css`
  color: ${props => props.theme.palette.second};
  position: relative;
  ${MiddleTitleFontSizePC};
  padding-bottom: 10px;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 600%;
    height: 3px;
    background-color: ${props => props.theme.palette.primary};
  }

  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};

    &:after {
      width: 700%;
    }
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};

    &:after {
      width: 500%;
    }
  }
`


/**
 *
 * @param title 내부 콘텐츠 타이틀
 * @param position 왼쪽 오른쪽 여부 사용 할지 안할지 아직 모릅니다
 * @constructor
 */
function GridAreaTitleDiv({title, position}: ProjectSlideTitleDivPropsInterface): React.JSX.Element {

  return (
    <TitleDivStyle $position={position}>
      <PTag content={title} $styles={TitlePStyle} font={NanumGodicFont.className}/>
    </TitleDivStyle>
  )
}

export default React.memo(GridAreaTitleDiv)
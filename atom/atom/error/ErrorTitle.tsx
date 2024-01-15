import React from "react";
import styled, {css} from "styled-components";
import {
  DisplayFlexContainer,
  MiddleTitleFontSizeMobile,
  MiddleTitleFontSizePC,
  MiddleTitleFontSizeTablet
} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";
import PTag from "@/atom/atom/PTag";
import {NanumGodicFont} from "@/styles/font/fontStyle";


const ErrorTitleDivStyle = styled(DisplayFlexContainer(flexDirectionEnum.c , justifyContentEnum.c , alignItemsEnum.c))`
`
const ErrorTitleContentStyle = css`
  color: ${props => props.theme.palette.primary};
  ${MiddleTitleFontSizePC};
  font-weight: bold;
  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }
`
const ErrorTitleSubStyle = css`
  color: crimson;
  font-size: 16px;
  margin-top: 10px;
  ${(props) => props.theme.media.tablet} {
    font-size: 14px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 12px;
  }
`

function ErrorTitle():React.JSX.Element {
  return (
    <ErrorTitleDivStyle>
      <PTag $styles={ErrorTitleContentStyle} font={NanumGodicFont.className} content={'비밀번호를 입력해주세요.'}/>
      <PTag $styles={ErrorTitleSubStyle} font={NanumGodicFont.className} content={'함께 제공된 GET PARAMETER 를 다시 한번 확인해주세요.'} />
    </ErrorTitleDivStyle>
  )
}

export default React.memo(ErrorTitle)
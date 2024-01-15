import styled, {css} from "styled-components";
import {
  ContentFontSizeMobile,
  ContentFontSizePC, ContentFontSizeTablet, ContentLineHeight, DisplayFlexContainer,
  MiddleTitleFontSizeMobile,
  MiddleTitleFontSizePC,
  MiddleTitleFontSizeTablet
} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";

export const EducationGridContentTitleStyle = css`
  ${MiddleTitleFontSizePC};
  font-weight: bold;
  margin-bottom: 5px;
  color: ${props => props.theme.palette.primary};

  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }
`

export const EducationGridContentTextDivStyle = styled.div`
  margin-top: 10px;
  color: ${props => props.theme.palette.primary};
  ${ContentFontSizePC};
  ${ContentLineHeight};

  ${(props) => props.theme.media.tablet} {
    ${ContentFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${ContentFontSizeMobile};
  }
`

export const EducationInnerDivStyle = styled(DisplayFlexContainer(flexDirectionEnum.c , justifyContentEnum.c , alignItemsEnum.fs))`
  padding-bottom: 15px;
`
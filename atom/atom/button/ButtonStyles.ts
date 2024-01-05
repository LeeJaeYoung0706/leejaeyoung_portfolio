import {css} from "styled-components";
import {ContentFontSizeMobile, ContentFontSizePC, ContentFontSizeTablet} from "@/styles/commonStyles";


export const HeaderButtonStyle = css`
  background-color: transparent;
  text-align: center;
  ${ContentFontSizePC};
  padding: 10px;
  letter-spacing: 1.2px; // 글자 사이 간격
  font-weight: bold;
  line-height: 1;
  min-width: 120px;
  height: 30px;
  border: none;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.palette.middle};
      //opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.tablet} {
    max-width: 110px;
    ${ContentFontSizeTablet};

    &:active {
      color: ${(props) => props.theme.palette.primary};
      opacity: 0.9;
    }
  }

  ${(props) => props.theme.media.mobile} {
    max-width: 100px;
    ${ContentFontSizeMobile};

    &:active {
      color: ${(props) => props.theme.palette.primary};
      opacity: 0.9;
    }
  }
`

export const UpButtonStyle = css`
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 30px;
  ${ContentFontSizePC};
  z-index: 400;
  color: ${(props) => props.theme.palette.second};
  font-weight: bold;
  opacity: 0.3;
  filter: invert(45%);
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }

  ${(props) => props.theme.media.tablet} {
    max-width: 200px;
    ${ContentFontSizeTablet};
    padding: 25px;

    &:active {
      opacity: 1;
    }
  }

  ${(props) => props.theme.media.mobile} {
    max-width: 200px;
    right: 25px;
    opacity: 0.5;
    ${ContentFontSizeMobile};
  }
`
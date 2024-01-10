import styled from "styled-components";
import {LargeTitleFontSizeMobile, LargeTitleFontSizePC, LargeTitleFontSizeTablet} from "@/styles/commonStyles";
import {RussoOneFont} from "@/styles/font/fontStyle";

const StackGridTitleStyle = styled.p`
  z-index: 100;
  ${LargeTitleFontSizePC};
  color: ${props => props.theme.palette.middle};
  width: 100%;
  text-align: center;
  font-weight: bold;

  ${(props) => props.theme.media.tablet} {
    ${LargeTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${LargeTitleFontSizeMobile};
  }
`
/**
 * Stack Grid Title View
 * @param title String title
 * @constructor
 */
export default function StackLogoGridTitle({title}: StackGridLogoTitlePropsInterface) {
  return (
    <StackGridTitleStyle className={RussoOneFont.className}>
      {title}
    </StackGridTitleStyle>
  )
}
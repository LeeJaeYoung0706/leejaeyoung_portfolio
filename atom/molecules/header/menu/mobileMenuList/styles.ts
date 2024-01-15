import {LargeTitleFontSizeMobile} from "@/styles/commonStyles";
import {css} from "styled-components";

/**
 * 모바일 Li 스타일
 */
export const HeaderMobileLiStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
  font-size: ${LargeTitleFontSizeMobile};
  color: ${props => props.theme.palette.primary};
  background-color: ${props => props.theme.palette.reverse70};
`;
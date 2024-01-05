import styled, {css} from "styled-components";
import {useScrollPosition} from "@/hooks/useScrollPosition";
import {RussoOneFont} from "@/styles/font/fontStyle";
import HTag from "@/atom/atom/HTag";



export const LogoStyle = styled.div<{  $isTop: boolean , $checked: boolean }>`
  padding-left: 40px;
  ${(props) => (props.$isTop || props.$checked) ? css`color: ${props.theme.palette.primary};` : css`color: transparent;`};
  background-color: transparent;
  line-height: 1;
  
  ${(props) => props.theme.media.tablet} {
    padding-left: 40px;
    background-color: transparent;
  }

  ${(props) => props.theme.media.mobile} {
    background-color: transparent;
    padding-left: 23px;
  }
`

/**
 * Logo
 * @param logoText 로고 노출 텍스트
 * @param logoFont 로고 텍스트 폰트 ClassName String
 * @param $logoFontSize 로고 Font Size
 * @param checked 노출 여부
 * @constructor
 */
export default function Logo({logoText, logoFont , checked}: LogoComponentPropsInterface) {
    const [isTop] = useScrollPosition();

    return (
        <LogoStyle
            $isTop={isTop}
            $checked={checked}
        >
          <HTag
            index={1}
            content={logoText}
            fontStyle={logoFont}
          />
        </LogoStyle>
    )
}

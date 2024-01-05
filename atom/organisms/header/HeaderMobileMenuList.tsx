import styled, {css, keyframes} from "styled-components";
import React, {useMemo} from "react";
import {MenuButtonArray} from "@/atom/molecules/header/data/data";
import {commonAnimation} from "@/styles/commonStyles";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useThemeContext} from "@/styles/ThemeHandlerContext";
import UlTag from "@/atom/atom/list_tags/UlTag";
import LiTag from "@/atom/atom/list_tags/LiTag";
import {Button} from "@/atom/atom/button/Button";
import {HeaderButtonStyle} from "@/atom/atom/button/ButtonStyles";
import {RussoOneFont} from "@/styles/font/fontStyle";
import Keyframes from "styled-components/dist/models/Keyframes";



const dropdownAnimation: Keyframes = keyframes`
  0% {
    transform: translateX(200px);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
`

const HeaderMobileMenuListStyle = styled.nav<{ $checked: boolean }>`
  text-decoration: none;
  display: ${(props) => props.$checked ? 'block' : 'none'};
  position: absolute;
  top: 53px;
  width: 100vw;
  opacity: 0.9;
  right: 0;


  &:last-child {
    border-bottom: 2px solid ${props => props.theme.palette.middle};
  }

  ${(props) => props.$checked && commonAnimation(css`${dropdownAnimation} 0.5s normal linear;`)};

  ${(props) => props.theme.media.tablet} {
    top: 60px;
  }

  ${(props) => props.theme.media.mobile} {
    top: 60px;
    min-width: 370px;
  }


`
/**
 * Mobile Header Menu Open Dropdown
 * @param checked 클릭 여부
 * @param onClick 테마 핸들러 또는 라우트를 위한 클릭펑션
 * @constructor
 */

export default function HeaderMobileMenuList({checked, onClick}: HeaderMobileMenuListPropsInterface) {
  // 테마 핸들러
  const {themeHandler} = useThemeContext();
  const router: AppRouterInstance = useRouter();
  const ButtonList = useMemo(() => MenuButtonArray(router, themeHandler), []);

  return (
    <HeaderMobileMenuListStyle $checked={checked} onClick={onClick}>
      <UlTag $style={
        css`
        `}>
        {
          ButtonList?.length > 0 &&
          ButtonList?.map((value: MenuButtonArrayInterface, index: number) => {
            return (
              <LiTag content={
                <Button
                  onClick={value.onClick}
                  content={value.content}
                  $style={HeaderButtonStyle}
                  font={RussoOneFont.className}
                />}
                     $style={css`
                        color: ${props => props.theme.palette.primary};
                     `}
                     key={`${index}.${value.content}`}
              />
            )
          })
        }
      </UlTag>
    </HeaderMobileMenuListStyle>
  )
}
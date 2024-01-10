import React, {useMemo} from "react";
import {MenuButtonArray} from "@/data/header_data";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {useThemeContext} from "@/styles/ThemeHandlerContext";
import UlTag from "@/atom/atom/list_tags/UlTag";
import LiTag from "@/atom/atom/list_tags/LiTag";
import {Button} from "@/atom/atom/button/Button";
import {HeaderButtonStyle} from "@/atom/atom/button/ButtonStyles";
import {RussoOneFont} from "@/styles/font/fontStyle";
import HeaderMobileMenuListView from "@/atom/molecules/header/menu/mobileMenuList/HeaderMobileMenuListView";
import {HeaderMobileLiStyle} from "@/atom/molecules/header/menu/mobileMenuList/styles";



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
    <HeaderMobileMenuListView checked={checked} onClick={onClick}>
      <UlTag>
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
                     $style={HeaderMobileLiStyle}
                     key={`${index}.${value.content}.mobile`}
              />
            )
          })
        }
      </UlTag>
    </HeaderMobileMenuListView>
  )
}
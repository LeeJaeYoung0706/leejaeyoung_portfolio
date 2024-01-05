'use client'
import React, {useMemo} from 'react';
import HeaderPcMenuView from "@/atom/molecules/header/menu/PcMenuView";
import {useRouter} from "next/navigation";
import {useThemeContext} from "@/styles/ThemeHandlerContext";
import {useScrollPosition} from "@/hooks/useScrollPosition";
import {RussoOneFont} from "@/styles/font/fontStyle";
import UlTag from "@/atom/atom/list_tags/UlTag";
import LiTag from "@/atom/atom/list_tags/LiTag";
import {Button} from "@/atom/atom/button/Button";
import {HeaderButtonStyle} from "@/atom/atom/button/ButtonStyles";
import {css} from "styled-components";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {MenuButtonArray} from "@/atom/molecules/header/data/data";


/**
 * Header Pc Menu container
 * @constructor
 */

export default function HeaderPcMenu(): React.JSX.Element {

  // ServerSide => next/router , CSR => navigation
  const router: AppRouterInstance = useRouter();
  const {themeHandler} = useThemeContext();
  const [isTop] = useScrollPosition();
  const ButtonList = useMemo(() => MenuButtonArray(router, themeHandler), []);

  return (
    <HeaderPcMenuView $isTop={isTop}>
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
                       border: none;
                       display: inline-block;
                       list-style: none;
                     `}
                     key={`${index}.${value.content}`}
              />
            )
          })
        }
      </UlTag>
    </HeaderPcMenuView>
  )
}
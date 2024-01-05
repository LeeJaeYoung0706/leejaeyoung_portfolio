'use client'
import HeaderView from "@/atom/organisms/header/HeaderView";
import React, {useCallback, useState} from "react";
import Logo from "@/atom/atom/Logo";
import {RussoOneFont} from "@/styles/font/fontStyle";
import {useScrollPosition} from "@/hooks/useScrollPosition";
import HeaderPcMenu from "@/atom/molecules/header/menu/PcMenu";
import HeaderMobileMenu from "@/atom/molecules/header/menu/MobileMenu";

/**
 * Header Container
 * @constructor
 */
export default function Header(): React.JSX.Element {
  // 최 상단인지 체크
  const [isTop] = useScrollPosition();
  // 모바일 일 때 메뉴 오픈 상태인지 체크
  const [checked, setChecked] = useState<boolean>(false);

  const checkHandler = useCallback(() => {
    setChecked((pre) => !pre)
  }, [checked])


  return (
    <HeaderView isTop={isTop} checked={checked}>
      <Logo
        logoText={'PORTFOLIO'}
        logoFont={RussoOneFont.className}
        checked={checked}
      />
      <HeaderPcMenu />
      <HeaderMobileMenu checked={checked} checkHandler={checkHandler}/>
    </HeaderView>
  )
}


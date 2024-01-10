import React from 'react';
import MobileMenuView, {CloseBackGround} from "@/atom/molecules/header/menu/MobileMenuView";
import HeaderHamburgerButton from "@/atom/atom/header/HeaderHamburgerButton";
import HeaderMobileMenuList from "@/atom/molecules/header/menu/mobileMenuList/HeaderMobileMenuList";

/**
 * Mobile 메뉴 Container
 * @param checked 오픈 여부
 * @param checkHandler 오픈 헨들러
 * @constructor
 */

export default function HeaderMobileMenu({checked, checkHandler}: MobileMenuInterface): React.JSX.Element {
  return (
    <>
      {
        checked && <CloseBackGround onClick={checkHandler}/>
      }
      <MobileMenuView>
        <HeaderHamburgerButton checked={checked} onClick={checkHandler}/>
        <HeaderMobileMenuList checked={checked} onClick={checkHandler}/>
      </MobileMenuView>
    </>
  )
}
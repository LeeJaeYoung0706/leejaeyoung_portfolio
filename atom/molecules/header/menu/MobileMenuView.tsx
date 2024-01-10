import React from 'react';
import styled from "styled-components";
import {DisplayFlex} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";

/**
 * Menu 외 선택 시 Close 를 위한 Div
 */
export const CloseBackGround = styled.div`
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 350;
`


const HeaderMobileMenuStyle = styled.nav`
  display: none;
  position: relative;
  padding-right: 18px;
  z-index: 450;

  ${(props) => props.theme.media.tablet} {
    ${DisplayFlex(flexDirectionEnum.c, justifyContentEnum.c, alignItemsEnum.c)}
  }

  ${(props) => props.theme.media.mobile} {
    ${DisplayFlex(flexDirectionEnum.c, justifyContentEnum.c, alignItemsEnum.c)}
  }
`
/**
 * Mobile Menu View
 * @param children
 * @constructor
 */
const MobileMenuView = ({children}: MobileMenuPropsInterface): React.JSX.Element => {
  return (
    <HeaderMobileMenuStyle>
      {children}
    </HeaderMobileMenuStyle>
  )
}

export default React.memo(MobileMenuView)
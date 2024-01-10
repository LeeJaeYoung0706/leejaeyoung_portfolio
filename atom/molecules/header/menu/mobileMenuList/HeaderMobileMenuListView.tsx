import React from "react";
import {commonAnimation} from "@/styles/commonStyles";
import styled, {css, keyframes} from "styled-components";
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
function HeaderMobileMenuListView({children , checked , onClick} : HeaderMobileMenuListPropsInterface): React.JSX.Element {

  return (
    <HeaderMobileMenuListStyle $checked={checked} onClick={onClick}>
      {children}
    </HeaderMobileMenuListStyle>
  )
}

export default React.memo(HeaderMobileMenuListView)

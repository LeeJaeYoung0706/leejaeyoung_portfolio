import React from 'react';
import styled, {css} from "styled-components";


const HeaderPcMenuStyle = styled.nav<{$isTop: boolean}>`
  min-width: 600px;
  ${(props) => props.$isTop ? css` color: ${props.theme.palette.primary};`
          : css` color: ${props.theme.palette.second};
            opacity: 1;`
  };
  
  ${(props) => props.theme.media.tablet} {
    display: none;
  }

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`

/**
 * PC menu View
 * @param children
 * @param $isTop 스크롤 맨 위 체크
 * @constructor
 */
function PcMenuView({children , $isTop} : HeaderPcMenuInterface): React.JSX.Element {

    return (
        <HeaderPcMenuStyle $isTop={$isTop}>
            {children}
        </HeaderPcMenuStyle>
    )
}

export default React.memo(PcMenuView)
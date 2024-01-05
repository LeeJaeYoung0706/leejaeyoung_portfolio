import React from "react";
import styled, {css} from "styled-components";

const HeaderLayoutStyle = styled.header<{ $isTop: boolean, $checked: boolean }>`
  position: fixed;
  width: 100%;
  min-height: 100px;
  transition: 0.5s;
  z-index: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${(props) => (props.$checked || props.$isTop) ?
          css`background-color: ${props.theme.palette.reverse70};`
          :
          css`background-color: transparent;`}
`

/**
 * header View
 * @param children
 * @param isTop
 * @param checked
 * @constructor
 */
function HeaderView({children, isTop, checked}: HeaderPropsInterface): React.JSX.Element {
  return (
    <HeaderLayoutStyle $isTop={isTop} $checked={checked}>
      {children}
    </HeaderLayoutStyle>
  )
}

export default React.memo(HeaderView)
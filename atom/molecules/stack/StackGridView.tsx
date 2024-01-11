import React from 'react';
import styled from "styled-components";
import {DisplayFlex} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";


const StackGridViewStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3열
  margin: 0 auto;
  max-width: 1500px;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-areas: 'front back other'
                       'front back other';
  grid-gap: 17px; /* 각 그리드 아이템 사이의 간격 */

  ${(props) => props.theme.media.tablet} {
    max-width: 700px;
    ${DisplayFlex(flexDirectionEnum.c , justifyContentEnum.c, alignItemsEnum.c)}
  }

  ${(props) => props.theme.media.mobile} {
    max-width: 360px;
  }
`

/**
 * Stack Grid View
 * @param children
 * @constructor
 */
function StackGridView({children} : StackGridViewPropsInterface):React.JSX.Element {
    return (
        <StackGridViewStyle>
            {children}
        </StackGridViewStyle>
    )
}

export default React.memo(StackGridView)
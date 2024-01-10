import React from "react";
import styled from "styled-components";
import {DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";



const StackLogoStyle = styled(DisplayFlexContainer(flexDirectionEnum.r , justifyContentEnum.fs , alignItemsEnum.c))`
  width: 100%;
`

/**
 * Stack Logo View
 * @param children
 * @constructor
 */
function StackLogoView({children}: StackLogoViewPropsInterface): React.JSX.Element {
  return (
    <StackLogoStyle>
      {children}
    </StackLogoStyle>
  )
}

export default React.memo(StackLogoView)
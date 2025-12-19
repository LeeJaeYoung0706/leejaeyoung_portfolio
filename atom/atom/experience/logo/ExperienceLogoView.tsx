import React from "react";
import styled from "styled-components";
import {DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";



const ExperienceLogoStyle = styled(DisplayFlexContainer(flexDirectionEnum.r , justifyContentEnum.fs , alignItemsEnum.c))`
  width: 100%;
`

/**
 * Stack Logo View
 * @param children
 * @constructor
 */
function ExperienceLogoView({children}: StackLogoViewPropsInterface): React.JSX.Element {
  return (
    <ExperienceLogoStyle>
      {children}
    </ExperienceLogoStyle>
  )
}

export default React.memo(ExperienceLogoView)
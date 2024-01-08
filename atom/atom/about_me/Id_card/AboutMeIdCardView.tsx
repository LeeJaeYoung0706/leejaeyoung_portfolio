import React from 'react';
import styled from "styled-components";
import {DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/types/enum";


const AboutMeIdCardStyle = styled(DisplayFlexContainer(flexDirectionEnum.r, justifyContentEnum.fs, alignItemsEnum.c))`
  width: 32%;
  box-sizing: border-box;
  margin-top: 50px;
  min-width: 320px;
  padding-bottom: 23px;
  gap: 50px;
  padding-left: 20px;
  border-bottom: 2px solid ${props => props.theme.palette.primary70};

  ${(props) => props.theme.media.tablet} {
    width: 40%;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 300px;
    gap: 20px;
  }
`

function AboutMeIdCardView({children}: AboutMeIdCardViewPropsInterface): React.JSX.Element {
  return (
    <AboutMeIdCardStyle>
      {children}
    </AboutMeIdCardStyle>
  )
}

export default React.memo(AboutMeIdCardView)
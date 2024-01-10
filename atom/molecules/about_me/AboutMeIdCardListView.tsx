import React from "react";
import styled from "styled-components";
import {DisplayFlex, DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, displayEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";

const IdCardListStyles = styled(DisplayFlexContainer(flexDirectionEnum.r , justifyContentEnum.sa , alignItemsEnum.c , displayEnum.f , true))`
  padding-bottom: 50px;
  width: 100%;
  box-sizing: border-box;
  gap: 50px;

  ${(props) => props.theme.media.tablet} {
    width: 70%;
  }

  ${(props) => props.theme.media.mobile} {
    width: 60%;
  }
`

const AboutMeIdCardListViewStyle = styled.article`
  width: 100%;
  line-height: 1;
  padding-bottom: 180px;
  ${DisplayFlex(flexDirectionEnum.c, justifyContentEnum.sa, alignItemsEnum.c, displayEnum.f, true)}
  
  ${(props) => props.theme.media.tablet} {
    ${DisplayFlex(flexDirectionEnum.c, justifyContentEnum.sa, alignItemsEnum.c, displayEnum.f, true)}
  }

  ${(props) => props.theme.media.mobile} {
    ${DisplayFlex(flexDirectionEnum.c, justifyContentEnum.sa, alignItemsEnum.c, displayEnum.f, false)}
  }
`

/**
 * AboutMe Id Card View
 * @param children
 * @constructor
 */
function AboutMeIdCardListView({children}: AboutMeIdCardListViewPropsInterface): React.JSX.Element {
  return (
    <AboutMeIdCardListViewStyle>
      {children[0]}
      <IdCardListStyles>
        {children[1]}
      </IdCardListStyles>
    </AboutMeIdCardListViewStyle>
  )
}

export default React.memo(AboutMeIdCardListView)
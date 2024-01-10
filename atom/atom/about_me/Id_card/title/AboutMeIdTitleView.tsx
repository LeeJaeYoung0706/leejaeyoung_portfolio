import React from "react";
import styled from "styled-components";
import {
  DisplayFlexContainer,
  MiddleTitleFontSizeMobile,
  MiddleTitleFontSizePC,
  MiddleTitleFontSizeTablet
} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";



const AboutMeIdCardTitleStyle = styled(DisplayFlexContainer(flexDirectionEnum.c , justifyContentEnum.c , alignItemsEnum.c))`
  min-width: 70px;
`
const AboutMeIdTitleInTitleFontStyle = styled.h3`
  ${MiddleTitleFontSizePC};
  line-height: 1;
  color: ${(props => props.theme.palette.middle)};
  min-width: 100px;

  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }

}
`
/**
 * AboutMe Id Title
 * @param children
 * @constructor
 */
function AboutMeIdTitleView({font, title}: AboutMeIdTitleViewPropsInterface): React.JSX.Element {
  return (
    <AboutMeIdCardTitleStyle>
      <AboutMeIdTitleInTitleFontStyle className={font}>
        {title}
      </AboutMeIdTitleInTitleFontStyle>
    </AboutMeIdCardTitleStyle>
  )
}

export default React.memo(AboutMeIdTitleView);
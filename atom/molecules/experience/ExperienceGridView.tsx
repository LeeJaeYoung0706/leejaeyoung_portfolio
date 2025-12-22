import React from 'react';
import styled from "styled-components";
import {DisplayFlex} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";


const ExperienceGridViewStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 3열
  margin: 0 auto;
  max-width: 1500px;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-areas: 'erSolution lnKorea'
                       'erSolution lnKorea';
  grid-gap: 17px; 

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
function ExperienceGridView({children} : StackGridViewPropsInterface):React.JSX.Element {
    return (
        <ExperienceGridViewStyle>
            {children}
        </ExperienceGridViewStyle>
    )
}

export default React.memo(ExperienceGridView)
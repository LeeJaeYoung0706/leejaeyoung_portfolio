import React from 'react';
import styled from "styled-components";

const AboutMeLayoutStyle = styled.section`
  background-color: ${props => props.theme.palette.reverse};
  margin: 0 auto;
  max-width: 1500px;
  min-height: 100vh;
  ${(props) => props.theme.media.tablet} {
    min-width: 600px;
    max-width: 700px;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 360px;
    max-width: 370px;
  }
`
/**
 * AboutMe View
 * @param children
 * @constructor
 */
function AboutMeView({children}: AboutMeViewPropsInterface): React.JSX.Element {
  return (
    <AboutMeLayoutStyle>
      {children}
    </AboutMeLayoutStyle>
  )
}

export default React.memo(AboutMeView)
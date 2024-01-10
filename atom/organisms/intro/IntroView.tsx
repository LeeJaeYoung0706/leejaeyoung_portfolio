import React from "react";
import styled from "styled-components";
import {kdamThmorPro} from "@/styles/font/fontStyle";



const IntroLayoutStyle = styled.section`
  background-color: ${props => props.theme.palette.reverse};
  height: 105vh;
`;

/**
 * Intro View
 * @param children
 * @constructor
 */
function IntroView({children}: IntroPropsInterface): React.JSX.Element {
  return (
    <IntroLayoutStyle className={kdamThmorPro.className}>
      {children}
    </IntroLayoutStyle>
  )
}

export default React.memo(IntroView)
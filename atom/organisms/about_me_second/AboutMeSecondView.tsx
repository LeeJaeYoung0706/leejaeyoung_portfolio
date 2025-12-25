"use client"
import React from 'react';
import styled from "styled-components";

const AboutMeSecondLayoutStyle = styled.section`
    background-color: ${props => props.theme.palette.reverse};
    margin: 0 auto;
    max-width: 1500px;
    min-height: 100vh;
    padding: 20px 20px;

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
function AboutMeSecondView({children}: AboutMeViewPropsInterface): React.JSX.Element {
    return (
        <AboutMeSecondLayoutStyle>
            {children}
        </AboutMeSecondLayoutStyle>
    )
}

export default React.memo(AboutMeSecondView)
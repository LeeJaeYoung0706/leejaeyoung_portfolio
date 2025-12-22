import ExperienceLogoGridTitle from "@/atom/atom/experience/title/ExperienceLogoGridTitle";
import {RussoOneFont} from "@/styles/font/fontStyle";
import {
    ContentFontSizeMobile,
    ContentFontSizePC, ContentFontSizeTablet,
    LargeTitleFontSizeMobile,
    LargeTitleFontSizePC,
    LargeTitleFontSizeTablet
} from "@/styles/commonStyles";
import styled from "styled-components";

const ExperienceContentCardStyle = styled.p`
    z-index: 200;
    ${ContentFontSizePC};
    background-color: ${props => props.theme.palette.second};
    width: 100%;
    min-height: 500px;
    padding: 20px;
    
    ${(props) => props.theme.media.tablet} {
        ${ContentFontSizeTablet};
    }

    ${(props) => props.theme.media.mobile} {
        ${ContentFontSizeMobile};
    }
`

export default function ExperienceContentCard() {
    return (
        <ExperienceContentCardStyle className={RussoOneFont.className}>
            <>TEST LAYOUT</>
        </ExperienceContentCardStyle>
    )
}
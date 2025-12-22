'use client'
import styled from "styled-components";
import {RussoOneFont} from "@/styles/font/fontStyle";
import React from "react";


const AboutMeSecondContentViewStyleDiv = styled.article`
    width: 100%;
    height: 100%;
`

const AboutMeSecondContentViewStyle = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 70vh;
    background: ${props => props.theme.palette.reverse70};
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 1s ease-in-out;
    border: 2px solid ${props => props.theme.palette.reverse};

    &:hover {
        transform: scale(1.1);
    }

    &:hover .box {
        bottom: 0;
        left: 0;
    }
`

const AboutMeSecondLogoStyle = styled.div`
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    transition: all 0.6s ease-in-out;
    font-size: 2.5em;
    font-weight: 600;
    color: ${props => props.theme.palette.primary};
    letter-spacing: 3px;
`

const AboutMeSecondBackgroundStyle = styled.div`
    position: absolute;
    inset: 0;
    background-color: ${props => props.theme.palette.reverse70};
    background-image: linear-gradient(43deg, ${props => props.theme.palette.middle} 0%, ${props => props.theme.palette.middle70} 46%, ${props => props.theme.palette.second70} 100%);
`

export default function AboutMeSecondContentView({children}: AboutMeSecondContentViewPropsInterface) {
    return (
        <AboutMeSecondContentViewStyleDiv>
            <AboutMeSecondContentViewStyle>
                <AboutMeSecondBackgroundStyle/>
                <AboutMeSecondLogoStyle className={RussoOneFont.className}>
                    ABOUT ME
                </AboutMeSecondLogoStyle>
                {children}
            </AboutMeSecondContentViewStyle>
        </AboutMeSecondContentViewStyleDiv>
    )
}
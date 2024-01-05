import {css, DefaultTheme} from "styled-components";
import {customMediaQuery} from "@/styles/commonStyles";

/**
 * 보라 계열 테마
 */
export const pink: DefaultTheme = {
    palette: {
        primary: 'var(--pink-primary)',
        second: 'var(--pink-second)',
        middle: 'var(--pink-middle)',
        reverseSecond: 'var(--pink-reverse-second)',
        reverse: 'var(--pink-reverse)',

        primary70: 'var(--pink-primary-70)',
        second70: 'var(--pink-second-70)',
        middle70: 'var(--pink-middle-70)',
        reverseSecond70: 'var(--pink-reverse-second-70)',
        reverse70: 'var(--pink-reverse-70)',
        background: 'var(--white)',
        backgroundSecond: 'var(--white-70)'

    },
    media: {
        pc: customMediaQuery(1440),
        tablet: customMediaQuery(1366),
        mobile: customMediaQuery(767),
    },
}


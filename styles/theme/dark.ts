import {DefaultTheme} from "styled-components";
import {customMediaQuery} from "@/styles/commonStyles";

/**
 * 검정 계열 테마
 */
export const dark: DefaultTheme = {
    palette: {
        primary: 'var(--dark-primary)',
        second: 'var(--dark-second)',
        middle: 'var(--dark-middle)',
        reverseSecond: 'var(--dark-reverse-second)',
        reverse: 'var(--dark-reverse)',

        primary70: 'var(--dark-primary-70)',
        second70: 'var(--dark-second-70)',
        middle70: 'var(--dark-middle-70)',
        reverseSecond70: 'var(--dark-reverse-second-70)',
        reverse70: 'var(--dark-reverse-70)',
        background: 'var(--black)',
        backgroundSecond: 'var(--black-70)',
    },
    media: {
        pc: customMediaQuery(1440),
        tablet: customMediaQuery(1366),
        mobile: customMediaQuery(767),
    },
}


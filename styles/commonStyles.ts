import styled, {css, RuleSet} from "styled-components";
import {displayEnum} from "@/types/enum";
import {NoInfer} from "styled-components/dist/types";
import {Props} from "next/script";

/**
 * 반응형 쿼리
 * @param maxWidth
 */
export const customMediaQuery = (maxWidth: number): string =>
  `@media screen and (max-width: ${maxWidth}px)`

export const commonAnimation = (animationCss: RuleSet<NoInfer<any>>) => {
  return css`
    -webkit-animation: ${animationCss};
    animation: ${animationCss};
  `
}

/**
 * Font Size
 */
export const LargeTitleFontSizePC = css`font-size: 40px;`;
export const LargeTitleFontSizeTablet = css`font-size: 36px;`;
export const LargeTitleFontSizeMobile = css`font-size: 28px;`;
export const MiddleTitleFontSizePC = css`font-size: 26px;`;
export const MiddleTitleFontSizeTablet = css`font-size: 22px;`;
export const MiddleTitleFontSizeMobile = css`font-size: 20px;`;
export const ContentFontSizePC = css`font-size: 20px;`;
export const ContentFontSizeTablet = css`font-size: 17px;`;
export const ContentFontSizeMobile = css`font-size: 15px;`;
export const ContentLineHeight = css`line-height: 1.7`;
export const MiddleTitleLineHeight = css``;
export const SectionTitleLineHeight = css``;


/**
 * Flex function
 * @param display
 * @param flexDirection
 * @param justifyContent
 * @param alignItems
 * @param wrap
 */
export const DisplayFlexContainer = (flexDirection: flexDirectionType, justifyContent: justifyContentType, alignItems: alignItemsType, display: displayType = displayEnum.f, wrap?: boolean) =>
  styled.div`
    display: ${display};
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
  `;

/**
 *  Div 가 아닌 시맨틱 태그용
 * @param flexDirection
 * @param justifyContent
 * @param alignItems
 * @param display
 * @param wrap
 */
export const DisplayFlex = (flexDirection: flexDirectionType, justifyContent: justifyContentType, alignItems: alignItemsType, display: displayType = 'flex', wrap?: boolean) => css`
  display: ${display};
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
`
export const color = {
  black: 'var(--black)',
  white: 'var(--white)'
}
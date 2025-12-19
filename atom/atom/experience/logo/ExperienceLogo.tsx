
import HTag from "@/atom/atom/HTag";
import {NanumGodicFont} from "@/styles/font/fontStyle";
import {css} from "styled-components";
import {MiddleTitleFontSizeMobile, MiddleTitleFontSizePC, MiddleTitleFontSizeTablet} from "@/styles/commonStyles";
import ExperienceLogoView from "@/atom/atom/experience/logo/ExperienceLogoView";
import ExperienceLogoImage from "@/atom/atom/experience/logo/ExperienceLogoImage";

/**
 *
 * Stack Logo Container
 *
 * @param src => logo Image src
 * @param alt => logo Image alt
 * @param text => 기술 텍스트
 * @constructor
 */
export default function ExperienceLogo({src, alt, text}: StackLogoInterface) {
  return (
    <ExperienceLogoView>
      <ExperienceLogoImage
        src={src}
        alt={alt}
        size={'(max-width: 767px) 30px , 30px'}
      />
      <HTag index={5} content={text} fontStyle={NanumGodicFont.className} $styles={
        css`
          color: ${props => props.theme.palette.primary70};
          line-height: 1;
          font-weight: bold;
          ${MiddleTitleFontSizePC};

          ${(props) => props.theme.media.tablet} {
            ${MiddleTitleFontSizeTablet};
          }

          ${(props) => props.theme.media.mobile} {
            ${MiddleTitleFontSizeMobile};
          }
        `}/>
    </ExperienceLogoView>
  )
}
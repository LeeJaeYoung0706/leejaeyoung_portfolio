import React from "react";
import AboutMeIdTitleView from "@/atom/atom/about_me/Id_card/title/AboutMeIdTitleView";

/**
 *
 * AboutMe Id Title
 * @param font => font String className 형태
 * @param title => 타이틀 노출 텍스트
 * @param imageUrl => 이미지 src
 * @constructor
 */
export default function AboutMeIdTitle({font, title, imageUrl}: AboutMeIdTitlePropsInterface): React.JSX.Element {
  return (
    <AboutMeIdTitleView font={font}
                        title={title}
    />
  )
}


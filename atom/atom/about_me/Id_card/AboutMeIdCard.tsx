import React from "react";
import {RussoOneFont} from "@/styles/font/fontStyle";
import AboutMeIdCardContent from "@/atom/atom/about_me/Id_card/content/AboutMeIdCardContent";
import AboutMeIdCardView from "@/atom/atom/about_me/Id_card/AboutMeIdCardView";
import AboutMeIdTitle from "@/atom/atom/about_me/Id_card/title/AboutMeIdTitle";

/**
 * About Me Id Card 전체
 * @param title => 타이틀 텍스트
 * @param content => html 형태의 콘텐츠
 * @param imageUrl => 이미지 url
 * @constructor
 */
export default function AboutMeIdCard({title, content, imageUrl}: AboutMeIdCardPropsInterface): React.JSX.Element {
  return (
    <AboutMeIdCardView>
      <AboutMeIdTitle
        font={RussoOneFont.className}
        title={title}
        imageUrl={imageUrl}
      />
      <AboutMeIdCardContent
        content={content}
      />
    </AboutMeIdCardView>
  )
}


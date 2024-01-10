import AboutMeIdCardListView from "@/atom/molecules/about_me/AboutMeIdCardListView";
import React from "react";
import AboutMeIntroContent from "@/atom/atom/about_me/introduction/AboutMeIntroContent";
import AboutMeIdCard from "@/atom/atom/about_me/Id_card/AboutMeIdCard";

/**
 *
 * About Me Id card Container
 * @param idCardContentList title: string , before: string , $imageUrl: string list 형태
 * @constructor
 */
export default function AboutMeIdCardList({idCardContentList}: AboutMeIdCardListPropsInterface): React.JSX.Element {
  return (
    <AboutMeIdCardListView>
      <AboutMeIntroContent/>
        {
          idCardContentList?.length !== 0 &&
          idCardContentList?.map((value, index) => {
            return (
              <AboutMeIdCard
                title={value.title}
                content={value.content}
                key={index}
                imageUrl={value.$imageUrl}
              />
            )
          })
        }
    </AboutMeIdCardListView>
  )
}
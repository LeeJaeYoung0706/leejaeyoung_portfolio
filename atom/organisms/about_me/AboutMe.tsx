"use client"
import React from "react";
import AboutMeView from "@/atom/organisms/about_me/AboutMeView";
import {IdCardContentList} from "@/atom/organisms/about_me/AboutMeDescription";
import SectionTitle from "@/atom/atom/title/SectionTitle";
import AboutMeIdCardList from "@/atom/molecules/about_me/AboutMeIdCardList";


/**
 * About Me Container
 * @constructor
 */
export default function AboutMe(): React.JSX.Element {

  return (
    <AboutMeView>
      <SectionTitle title={'ABOUT'} id={'about'}/>
      <AboutMeIdCardList idCardContentList={IdCardContentList}/>
    </AboutMeView>
  )
}
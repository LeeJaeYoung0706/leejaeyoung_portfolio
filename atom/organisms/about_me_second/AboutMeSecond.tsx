import React from "react";
import AboutMeView from "@/atom/organisms/about_me/AboutMeView";
import {IdCardContentList} from "@/data/aboutme_data";
import SectionTitle from "@/atom/atom/title/SectionTitle";
import AboutMeIdCardList from "@/atom/molecules/about_me/AboutMeIdCardList";
import AboutMeSecondView from "@/atom/organisms/about_me_second/AboutMeSecondView";
import AboutMeSecondContent from "@/atom/molecules/about_me_second/AboutMeSecondContent";



export default function AboutMeSecond() {

    return (
        <AboutMeSecondView>
            <SectionTitle title={'ABOUTSECOND'} id={'aboutSecond'}/>
            <AboutMeSecondContent />
        </AboutMeSecondView>
    )
}
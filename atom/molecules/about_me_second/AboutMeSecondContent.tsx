'use client'
import AboutMeSecondContentView from "@/atom/molecules/about_me_second/AboutMeSecondContentView";
import FirstCard, {HoverPos} from "@/atom/atom/about_me_second/cards/FirstCard";
import {useCallback, useState} from "react";


export default function AboutMeSecondContent() {

    const [showGuide, setShowGuide] = useState<boolean>(true);

    const handleShowGuide = useCallback((pre: boolean) => setShowGuide(pre), []);


    return (
        <AboutMeSecondContentView showGuide={showGuide} handleShowGuide={handleShowGuide}>
            <FirstCard> <></></FirstCard>
        </AboutMeSecondContentView>
    );
}
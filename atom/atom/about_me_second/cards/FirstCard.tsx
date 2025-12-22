'use client'
import FirstCardView from "@/atom/atom/about_me_second/cards/FirstCardView";
import {useCallback, useState} from "react";


export type HoverPos = "left" | "mid" | "right" | null;

export default function FirstCard({children} : ComponentChildrenPropsInterface) {

    const [hover, setHover] = useState<HoverPos>(null);

    const handleHover = useCallback((pos: HoverPos) => setHover(pos), []);


    return <FirstCardView hover={hover} setHover={handleHover}>
        {children}
    </FirstCardView>
}
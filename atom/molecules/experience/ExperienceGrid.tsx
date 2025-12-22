import React from "react";
import {GridContentLayoutStyle} from "@/atom/molecules/stack/Styles";
import {BackStackLogoArray, FrontStackLogoArray} from "@/data/stack_data";
import StackLogo from "@/atom/atom/stack/logo/StackLogo";
import ExperienceGridView from "@/atom/molecules/experience/ExperienceGridView";
import ExperienceGridArea from "@/atom/molecules/experience/grid/ExperienceGridArea";
import ExperienceLogoGridTitle from "@/atom/atom/experience/title/ExperienceLogoGridTitle";
import {AreaERSolution, AreaLnKorea} from "@/atom/molecules/experience/grid/ExperienceGridAreaStyle";
import ExperienceContentCard from "@/atom/atom/experience/contents/ExperienceContentCard";


/**
 * Stack 부분 그리드 영역 Container
 * @constructor
 */
export default function ExperienceGrid(): React.JSX.Element {

    return (
        <ExperienceGridView>
            <ExperienceGridArea $area={AreaLnKorea}>
                <ExperienceLogoGridTitle title={'LnKorea'}/>
                <ExperienceContentCard/>
            </ExperienceGridArea>
            <ExperienceGridArea $area={AreaERSolution}>
                <ExperienceLogoGridTitle title={'ERSolution'}/>
                <ExperienceContentCard/>
            </ExperienceGridArea>
        </ExperienceGridView>
    )
}
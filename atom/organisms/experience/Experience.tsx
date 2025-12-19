'use client'
import React from "react";
import SectionTitle from "@/atom/atom/title/SectionTitle";
import ExperienceView from "@/atom/organisms/experience/ExperienceView";
import StackGrid from "@/atom/molecules/stack/StackGrid";
import ExperienceGrid from "@/atom/molecules/experience/ExperienceGrid";


/**
 * About Me Container
 * @constructor
 */
export default function Experience(): React.JSX.Element {

    return (
        <ExperienceView>
            <SectionTitle title={'Experience'} id={'experience'}/>
            <ExperienceGrid/>
        </ExperienceView>
    )
}
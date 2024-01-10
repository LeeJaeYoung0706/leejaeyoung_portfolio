'use client'
import ProjectView from "@/atom/organisms/project/ProjectView";
import React from "react";
import SectionTitle from "@/atom/atom/title/SectionTitle";
import ProjectBorder from "@/atom/molecules/project/border/ProjectBorder";


/**
 * Project Container
 * @constructor
 */
export default function Project(): React.JSX.Element {
  return (
    <ProjectView>
      <SectionTitle title={'Project'} id={'project'}/>
      <ProjectBorder/>
    </ProjectView>
  )
}
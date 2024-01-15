"use client"
import React from "react";
import EducationView from "@/atom/organisms/education/EducationView";
import SectionTitle from "@/atom/atom/title/SectionTitle";
import EducationGrid from "@/atom/molecules/education/grid/EducationGrid";

/**
 * Education Container
 * @constructor
 */
export default function Education(): React.JSX.Element {
  return (
    <EducationView>
      <SectionTitle title={'Education'} id={'education'}/>
      <EducationGrid />
    </EducationView>
  )
}
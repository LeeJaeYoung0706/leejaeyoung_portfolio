import BorderContentView from "@/atom/molecules/project/border/content/BorderContentView";
import {projectGridArray} from "@/atom/molecules/project/border/grid/data";
import GridAreaLayout from "@/atom/molecules/project/border/grid/GridAreaLayout";
import GridAreaTitleDiv from "@/atom/atom/project/border/GridAreaTitleDiv";
import React from "react";
import ProjectGridContent from "@/atom/atom/project/border/ProjectContent";
import ProjectLinkTag from "@/atom/atom/project/border/ProjectLinkTag";
import {LinkGrid} from "@/atom/molecules/project/border/grid/StyleGridArea";


export default function ProjectBorderContent({project}: BorderContentPropsInterface): React.JSX.Element | null {

  if (project?.introductionTitle === undefined ||
    project?.responsibilities === undefined ||
    project?.review === undefined ||
    project?.functions === undefined ||
    project === undefined
  ) return null;

  return (
    <BorderContentView>
      {
        projectGridArray(project)?.length > 0 &&
        projectGridArray(project).map((value, key) => {
          return (
            <GridAreaLayout $area={value.$area} $checked={value.$checked} key={value.key}>
              {
                !value?.$checked &&
                <>
                  <GridAreaTitleDiv title={value.title || ''} position={true}/>
                  <ProjectGridContent
                    content={value?.content}
                  />
                </>
              }
            </GridAreaLayout>
        )
        })
      }
      {
        project?.link !== undefined &&
        <ProjectLinkTag link={project?.link} $area={LinkGrid}/>
      }
    </BorderContentView>
  )
}
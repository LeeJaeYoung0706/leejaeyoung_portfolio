import React from "react";
import UlTag from "@/atom/atom/list_tags/UlTag";
import {projectUlStyle} from "@/atom/molecules/project/border/Styles";
import ProjectTitleLi from "@/atom/atom/project/title/ProjectTitleLi";


const ProjectTitleList = ({project , projectCheckHandler}: ProjectTitleListPropsInterface): React.JSX.Element => {
  return (
    <UlTag $style={projectUlStyle}>
      {
        project?.length > 0 &&
        project?.map((value, index) => {
          return (
            <ProjectTitleLi project={value} projectCheckHandler={projectCheckHandler}
                            key={`${index}${value.title}`}/>
          )
        })
      }
    </UlTag>
  )
}

export default React.memo(ProjectTitleList)
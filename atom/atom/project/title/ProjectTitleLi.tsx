import React from "react";
import ProjectTitleLiView from "@/atom/atom/project/title/ProjectTitleLiView";


/**
 *
 * @param project 프로젝트 정보  ProjectInterface 참고
 * @param projectCheckHandler 프로젝트 선택 콜백 함수
 * @constructor
 */
export default function ProjectTitleLi({project, projectCheckHandler}: ProjectTitleLiPropsInterface): React.JSX.Element {
  return (
    <ProjectTitleLiView
      title={project.title}
      checked={project.checked}
      liOnClick={() => projectCheckHandler({...project, checked: !project.checked})}
    />
  )
}
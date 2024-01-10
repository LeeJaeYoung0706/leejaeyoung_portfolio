import ProjectContentTextPartView from "@/atom/atom/project/border/ProjectContentTextPartView";


/**
 * 프로젝트 콘텐츠 텍스트 요소
 * @param content 프로젝트 콘텐츠
 * @constructor
 */
export default function ProjectContentTextPart({content}: ProjectContentTextPartPropsInterface) {
  return (
    <ProjectContentTextPartView
      content={content}
    />
  )
}
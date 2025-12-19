import ProjectContentTextPartView from "@/atom/atom/project/border/ProjectContentTextPartView";


/**
 * 프로젝트 콘텐츠 텍스트 요소
 * @param content 프로젝트 콘텐츠
 * @param keyValue 구분 값
 * @constructor
 */
export default function ProjectContentTextPart({content , keyValue}: ProjectContentTextPartPropsInterface) {
  return (
    <ProjectContentTextPartView
      content={content}
      keyValue={keyValue}
    />
  )
}
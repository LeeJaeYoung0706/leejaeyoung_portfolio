import React from "react";
import ProjectGridContentView from "@/atom/atom/project/border/ProjectContentView";
import ProjectContentTextPart from "@/atom/atom/project/border/ProjectContentTextPart";


/**
 *
 * @param position => true 일 경우 이미지 오른쪽 배치 false 일 경우 왼쪽 배치
 * @param partTitle => 파트 별 타이틀
 * @param content => 파트 내 콘텐츠
 * @constructor
 */
export default function ProjectGridContent({content}: ProjectContentPropsInterface
): React.JSX.Element {
  return (
    <ProjectGridContentView>
      <ProjectContentTextPart
        content={content}
      />
    </ProjectGridContentView>
  )
}

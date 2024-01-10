import React from "react";
import styled from "styled-components";
import {DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";


const ProjectContentViewStyle = styled(DisplayFlexContainer(flexDirectionEnum.c , justifyContentEnum.sa , alignItemsEnum.c))`
  width: 100%;
`

/**
 * Project 클릭 시 내부 요소 스타일
 * @param children
 * @constructor
 */
function ProjectGridContentView({children}: ComponentChildrenPropsInterface): React.JSX.Element {
  return (
    <ProjectContentViewStyle>
      {children}
    </ProjectContentViewStyle>
  )
}

export default React.memo(ProjectGridContentView)
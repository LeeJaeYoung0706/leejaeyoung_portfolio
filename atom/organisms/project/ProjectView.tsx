import React from "react";
import styled from "styled-components";


const ProjectViewSectionStyle = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.palette.reverse};
`

const ProjectArticleLayoutStyle = styled.article`
  padding-bottom: 120px;
`

/**
 * Project 부분 View
 * @param children
 * @constructor
 */
function ProjectView({children}: ProjectViewPropsInterface): React.JSX.Element {
  return (
    <ProjectViewSectionStyle>
      <ProjectArticleLayoutStyle>
        {children}
      </ProjectArticleLayoutStyle>
    </ProjectViewSectionStyle>
  )
}

export default React.memo(ProjectView)
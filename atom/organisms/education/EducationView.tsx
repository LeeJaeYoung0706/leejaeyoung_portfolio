import React from 'react';
import styled from "styled-components";


const EducationLayoutStyle = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.palette.reverse};
`
export const EducationArticleLayout = styled.article`
  padding-bottom: 120px; 
`
/**
 * AboutMe View
 * @param children
 * @constructor
 */
function EducationView({children}: EducationViewPropsInterface): React.JSX.Element {
  return (
    <EducationLayoutStyle>
      <EducationArticleLayout>
        {children}
      </EducationArticleLayout>
    </EducationLayoutStyle>
  )
}

export default React.memo(EducationView)
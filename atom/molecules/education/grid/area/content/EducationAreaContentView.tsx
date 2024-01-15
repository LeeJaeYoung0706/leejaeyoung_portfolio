import styled from "styled-components";
import React from "react";


const EducationGridContentLayoutStyle = styled.div`
  padding: 40px;
  width: 100%;

  ${(props) => props.theme.media.tablet} {
    padding: 20px;
  }

  ${(props) => props.theme.media.mobile} {
    padding: 20px;
  }
`


function EducationAreaContentView({children} : EducationAreaContentViewPropsInterface) : React.JSX.Element {
  return (
    <EducationGridContentLayoutStyle>
      {children}
    </EducationGridContentLayoutStyle>
  )
}

export default React.memo(EducationAreaContentView)
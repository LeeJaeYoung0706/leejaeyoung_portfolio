import React from "react";
import styled from "styled-components";

const BorderContentLayoutStyle = styled.div`
  display: grid;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-columns: 1fr;
  grid-template-areas: 'introductionTtile'
                         'introduction'
                          'stackTitle'
                          'stack'
                         'responsibilitiesTitle'
                         'responsibilities'
                         'functionsTitle'
                         'functions'
                         'reviewTitle'
                         'review'
                         
                         'link';
  grid-gap: 5px; 

  ${(props) => props.theme.media.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas: 'introductionTtile'
                         'introduction'
                           'stackTitle'
                          'stack'
                         'responsibilitiesTitle'
                         'responsibilities'
                         'functionsTitle'
                         'functions'
                         'reviewTitle'
                         'review'
                         'link';
  }

  ${(props) => props.theme.media.mobile} {
    grid-template-columns: 1fr;
    grid-template-areas: 'introductionTtile'
                         'introduction'
                         'stackTitle'
                         'stack'
                         'responsibilitiesTitle'
                         'responsibilities'
                         'functionsTitle'
                         'functions'
                         'reviewTitle'
                         'review'
                         'link';
  }
`

function ProjectBorderContentView({children}: any): React.JSX.Element {
  return (
    <BorderContentLayoutStyle>
      {children}
    </BorderContentLayoutStyle>
  )
}

export default React.memo(ProjectBorderContentView)
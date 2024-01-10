import React from "react";
import styled, {RuleSet} from "styled-components";

const PStyle = styled.p<{$styles: RuleSet<Object>}>`
  ${props => props.$styles};
`

const PTag = ({$styles , content , font} : PTagPropsInterface): React.JSX.Element => {
  return (
    <PStyle $styles={$styles} className={font}>{content}</PStyle>
  )
}

export default React.memo(PTag)
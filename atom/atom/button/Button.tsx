import styled, {css, RuleSet} from "styled-components";
import React from "react";


const ButtonStyle = styled.button<{ $style?: RuleSet<Object> }>`
  ${props => props.$style};
`

export function Button({content, $style, onClick, font}: ButtonPropsInterface) {
  return (
    <ButtonStyle $style={$style} className={font} onClick={onClick}>{content}</ButtonStyle>
  )
}
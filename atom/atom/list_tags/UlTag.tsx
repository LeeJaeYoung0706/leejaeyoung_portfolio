import styled, {RuleSet} from "styled-components";

const UlTagStyle = styled.ul<{$style?: RuleSet<Object>}>`
  ${props => props.$style};
`;

export default function UlTag({children , $style} : UlTagPropsInterface) {
  return <UlTagStyle $style={$style}>{children}</UlTagStyle>
}
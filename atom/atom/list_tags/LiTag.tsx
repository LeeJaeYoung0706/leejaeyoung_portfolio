import styled, {RuleSet} from "styled-components";

const LiTagStyle = styled.li<{$style?: RuleSet<Object>}>`
    ${props => props.$style};
`;

export default function LiTag({content , $style} : LiTagPropsInterface) {
  return <LiTagStyle $style={$style}>{content}</LiTagStyle>
}
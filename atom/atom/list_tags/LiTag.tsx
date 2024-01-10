import styled, {RuleSet} from "styled-components";

const LiTagStyle = styled.li<{$style?: RuleSet<Object>}>`
    ${props => props.$style};
`;

export default function LiTag({content , $style , handler} : LiTagPropsInterface) {
  return <LiTagStyle $style={$style} onClick={handler}>{content}</LiTagStyle>
}
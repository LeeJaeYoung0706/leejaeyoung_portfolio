import styled from "styled-components";
import {displayFlex} from "@/style/theme/common";

export const IdCardListStyles = styled.div`
  padding-bottom: 50px;
  ${displayFlex('row', 'space-around', 'center', 'flex', true)};
  width: 100%;
  box-sizing: border-box;
  gap: 50px;

  ${(props) => props.theme.media.tablet} {
    width: 70%;
  }

  ${(props) => props.theme.media.mobile} {
    width: 60%;
  }
`

import styled, {css} from "styled-components";
import {DisplayFlex} from "@/styles/commonStyles";
import {alignItemsEnum, displayEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";


export const projectUlStyle = css`
  list-style: none;
  padding: 0;
  min-height: 120px;
  margin-bottom: 40px;

  z-index: 350;
  ${DisplayFlex(flexDirectionEnum.r, justifyContentEnum.c, alignItemsEnum.c)};

  & li:last-child {
    border-right: none;
  }

  ${(props) => props.theme.media.tablet} {
    min-height: 230px;
    ${DisplayFlex(flexDirectionEnum.r, justifyContentEnum.sb, alignItemsEnum.c , displayEnum.f , true)};
  }

  ${(props) => props.theme.media.mobile} {
    min-height: 230px;
    ${DisplayFlex(flexDirectionEnum.r, justifyContentEnum.sa, alignItemsEnum.c , displayEnum.f , true)};
  }
`
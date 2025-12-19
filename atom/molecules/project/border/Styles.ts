import styled, {css} from "styled-components";
import {DisplayFlex} from "@/styles/commonStyles";
import {alignItemsEnum, displayEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";


export const projectUlStyle = css`
  list-style: none;
  padding: 0;
  min-height: 120px;
  margin-bottom: 40px;

  z-index: 350;
  ${DisplayFlex(flexDirectionEnum.r, justifyContentEnum.sb, alignItemsEnum.fs , displayEnum.f , true)};
  gap: 15px;
  & li:last-child {
    border-right: none;
  }

  ${(props) => props.theme.media.tablet} {
    min-height: 230px;
    gap: 10px;
    ${DisplayFlex(flexDirectionEnum.r, justifyContentEnum.sb, alignItemsEnum.fs , displayEnum.f , true)};
  }

  ${(props) => props.theme.media.mobile} {
    min-height: 230px;
    gap: 5px;
    ${DisplayFlex(flexDirectionEnum.r, justifyContentEnum.sa, alignItemsEnum.fs , displayEnum.f , true)};
  }
`
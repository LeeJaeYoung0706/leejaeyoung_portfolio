import styled, {css} from "styled-components";
import React from "react";
import {DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";
import PTag from "@/atom/atom/PTag";
import {NanumGodicFont} from "@/styles/font/fontStyle";

const InputLayoutDivStyle =styled(DisplayFlexContainer(flexDirectionEnum.c , justifyContentEnum.c , alignItemsEnum.c))`
  min-height: 40px;
`

const InputStyle = styled.input`
  border-radius: 7px;
  height: 100%;
  background-color: ${props => props.theme.palette.reverse};
  border: 1px solid ${props => props.theme.palette.middle};
  color: ${props => props.theme.palette.primary};
  padding: 12px;
  font-size: 16px;
  
  &:focus {
    border: 1px solid ${props => props.theme.palette.second70};
    outline: none;
    color: ${props => props.theme.palette.second};
  }
`

const ErrorPStyle = css`
  color: crimson;
  font-size: 12px;
`

export default function ErrorInputForm({pwdHandler, pwd , errorCheck} :ErrorInputFormPropsInterface) {
  return (
    <InputLayoutDivStyle>
      <InputStyle
        type={"password"}
        required={true}
        value={pwd}
        onChange={(e) => pwdHandler(e)}
      />
      {
        errorCheck && <PTag $styles={ErrorPStyle} content={'비밀번호가 일치하지 않습니다.'} font={NanumGodicFont.className}/>
      }
    </InputLayoutDivStyle>
  )
}
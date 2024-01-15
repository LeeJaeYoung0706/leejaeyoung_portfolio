import React from "react";
import styled from "styled-components";
import {DisplayFlex} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";

const ErrorStyle = styled.section`
  ${DisplayFlex(flexDirectionEnum.r, justifyContentEnum.c, alignItemsEnum.c)};
  min-height: 100vh;
`

const BoxStyle = styled.article`
  position: relative;
  width: 60%;
  height: 390px;
  border-radius: 7px;
  background-color: ${props => props.theme.palette.reverseSecond70};
  
  ${(props) => props.theme.media.tablet} {
    width: 70%;
    min-width: 600px;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 320px;
  }
  
`
const FormStyle = styled.article`
  position: absolute;
  padding: 50px 30px;
  inset: 4px;
  border-radius: 7px;
  z-index: 350;
  ${DisplayFlex(flexDirectionEnum.c, justifyContentEnum.sa, alignItemsEnum.c)};
  background-color: ${props => props.theme.palette.reverse};
  gap: 10px;
`

function ErrorSectionView({children}: ErrorSectionViewPropsInterface): React.JSX.Element {
  return (
    <ErrorStyle>
      <BoxStyle>
        <FormStyle>
          {children}
        </FormStyle>
      </BoxStyle>
    </ErrorStyle>
  )
}

export default React.memo(ErrorSectionView);
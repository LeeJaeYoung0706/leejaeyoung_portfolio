'use client'
import React from 'react';
import styled from "styled-components";
import {DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/types/enum";

const FooterStyle = styled.footer`
  background-color: ${props => props.theme.palette.reverse};
  height: 160px;
  bottom: 0;
  width: 100%;
`

const FooterDisplayFlexDivStyle = styled(DisplayFlexContainer(flexDirectionEnum.r, justifyContentEnum.c, alignItemsEnum.c))`
  height: 100%;
  & > p {
    color: ${props => props.theme.palette.primary70};
    opacity: 0.8;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <FooterDisplayFlexDivStyle>
        <p>©2023 LeeJaeYoung. All Rights Reserved.</p>
      </FooterDisplayFlexDivStyle>
    </FooterStyle>
  )
}

export default React.memo(Footer)
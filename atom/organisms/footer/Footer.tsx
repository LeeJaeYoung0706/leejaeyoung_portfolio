'use client'
import React from 'react';
import styled, {css} from "styled-components";
import {DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";
import PTag from "@/atom/atom/PTag";

const FooterStyle = styled.footer`
  background-color: ${props => props.theme.palette.reverse};
  height: 160px;
  bottom: 0;
  width: 100%;
`

const FooterDisplayFlexDivStyle = styled(DisplayFlexContainer(flexDirectionEnum.r, justifyContentEnum.c, alignItemsEnum.c))`
  height: 100%;
`;

function Footer() {
  return (
    <FooterStyle>
      <FooterDisplayFlexDivStyle>
        <PTag
          content={"©2024 LeeJaeYoung. All Rights Reserved."}
          $styles={css`
            color: ${props => props.theme.palette.primary70};
            opacity: 0.8;
          `}/>
      </FooterDisplayFlexDivStyle>
    </FooterStyle>
  )
}

export default React.memo(Footer)
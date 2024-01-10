import React from "react";
import styled, {css} from "styled-components";
import {DisplayFlexContainer} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";
import {RussoOneFont} from "@/styles/font/fontStyle";



const SectionTitleStyle = styled(DisplayFlexContainer(flexDirectionEnum.r, justifyContentEnum.c, alignItemsEnum.fe))<{ $id: string }>`
  width: 100%;
`

const SectionTitleText = styled.h1<{ $first: boolean }>`
  z-index: 100;
  color: ${(props) => props.$first ? props.theme.palette.reverse : props.theme.palette.second};
  ${(props) => props.$first ?
          css`
            text-shadow: -1px 0px ${props.theme.palette.second},
            0px 1px ${props.theme.palette.second},
            1px 0px ${props.theme.palette.second},
              0px -1px ${props.theme.palette.second};
            font-size: 90px;
            padding-right: 5px;
          ` : css`font-size: 80px;`};
  line-height: 1;
  text-transform: uppercase;
  font-weight: bold;
  padding-top: 120px;
  padding-bottom: 80px;

  ${(props) => props.theme.media.tablet} {
    font-size: 72px;
  }

  ${(props) => props.theme.media.mobile} {
    font-size: 54px;
  }
`;

/**
 * Section 마다 존재하는 Title Container
 * @param title title String
 * @param id
 * @constructor
 */
function SectionTitleView({title, id}: SectionTitleViewPropsInterface): React.JSX.Element {

  return (
    <SectionTitleStyle id={id} $id={id}>
      <SectionTitleText className={RussoOneFont.className} $first={true}>{title.first}</SectionTitleText>
      <SectionTitleText className={RussoOneFont.className} $first={false}>{title.other}</SectionTitleText>
    </SectionTitleStyle>
  )
}

export default React.memo(SectionTitleView)
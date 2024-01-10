import React from "react";
import {NanumGodicFont, RussoOneFont} from "@/styles/font/fontStyle";
import styled from "styled-components";
import {
  ContentLineHeight,
  DisplayFlexContainer,
  MiddleTitleFontSizeMobile, MiddleTitleFontSizePC,
  MiddleTitleFontSizeTablet
} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";


const InitSwiperContentStyle = styled(DisplayFlexContainer(flexDirectionEnum.c, justifyContentEnum.c, alignItemsEnum.c))`
  width: 100%;
  line-height: 1;
  position: relative;
  min-width: 1185px;
  padding: 3vw;
  min-height: 800px;

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    min-width: 600px;
  }

  ${(props) => props.theme.media.mobile} {
    width: 100%;
    min-width: 360px;
  }
`

const CompanyIntroduceLayout = styled.div`
  padding-top: 150px;
  padding-bottom: 150px;

  ${(props) => props.theme.media.tablet} {
    padding-top: 150px;
    padding-bottom: 150px;
  }

  ${(props) => props.theme.media.mobile} {
    padding-top: 150px;
    padding-bottom: 150px;
  }

  text-align: center;
`
const CompanyIntroduceText = styled.p`
  color: ${props => props.theme.palette.primary};
  ${MiddleTitleFontSizePC};
  ${ContentLineHeight};
  font-weight: bold;

  ${(props) => props.theme.media.tablet} {
    ${MiddleTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${MiddleTitleFontSizeMobile};
  }
`
const FiveSecondContentStyle = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding: 30px;
`

function InitPageContentView({children, introduceText, buttonComponent}: InitPageContentViewPropsInterface): React.JSX.Element {
  return (
    <InitSwiperContentStyle className={RussoOneFont.className}>
      <CompanyIntroduceLayout>
        {
          introduceText?.length > 0 &&
          introduceText?.map((value, index) => {
            return (
              <CompanyIntroduceText className={NanumGodicFont.className} key={`${index}_IntroduceTextList`}>
                {value}
              </CompanyIntroduceText>
            );
          })
        }
      </CompanyIntroduceLayout>
        {children}
      <FiveSecondContentStyle>
        {buttonComponent}
      </FiveSecondContentStyle>
    </InitSwiperContentStyle>
  )
}

export default React.memo(InitPageContentView)
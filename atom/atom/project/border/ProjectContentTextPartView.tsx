import React from "react";
import styled, {css} from "styled-components";
import Image from "next/image";
import {
  ContentFontSizeMobile,
  ContentFontSizePC,
  ContentFontSizeTablet,
  ContentLineHeight
} from "@/styles/commonStyles";
import {NotoSansFont} from "@/styles/font/fontStyle";
import PTag from "@/atom/atom/PTag";


const ContentLayoutStyle = styled.div`
`

const ProjectContentPStyle = css`
  ${ContentFontSizePC};
  ${ContentLineHeight};
  display: inline;
  color: ${props => props.theme.palette.primary};

  ${(props) => props.theme.media.tablet} {
    ${ContentFontSizeTablet};
    line-height: 2.1;
  }

  ${(props) => props.theme.media.mobile} {
    ${ContentFontSizeMobile};
  }
`

const ProjectTextPartViewStyle = styled.div`
  padding: 15px;
  width: 100%;

  ${(props) => props.theme.media.tablet} {
    padding: 15px;
  }

  ${(props) => props.theme.media.mobile} {
    padding: 15px;
  }
`

const CheckIconLayout = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  padding: 5px;
  display: inline-block;
  margin-right: 10px;

  ${(props) => props.theme.media.tablet} {
    ${ContentFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${ContentFontSizeMobile};
  }
`

const CheckIcon = styled(Image)`
  color: ${props => props.theme.palette.second70};
  position: absolute;
`

/**
 * Content Text 요소
 * @param content 프로젝트 콘텐츠
 * @constructor
 */
function ProjectContentTextPartView({content}: ProjectContentTextPartPropsInterface): React.JSX.Element | null {

  return (
    <ProjectTextPartViewStyle>
      {
        content?.length > 0 &&
          content?.map((value, index) => {
            return (
              <ContentLayoutStyle key={`${index}_${value}`}>
                <CheckIconLayout>
                  <CheckIcon
                    alt={"check"}
                    src={"/check.png"}
                    fill
                    sizes={"30px"}
                  />
                </CheckIconLayout>
                <PTag content={value} $styles={ProjectContentPStyle} font={NotoSansFont.className}/>
              </ContentLayoutStyle>
            )
          })
      }
    </ProjectTextPartViewStyle>
  )
}

export default React.memo(ProjectContentTextPartView)
import styled, {css} from "styled-components";
import React from "react";
import {
  ContentFontSizeMobile,
  ContentFontSizePC, ContentFontSizeTablet,
  DisplayFlexContainer,
  LargeTitleFontSizeMobile,
  LargeTitleFontSizePC,
  LargeTitleFontSizeTablet
} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";
import HTag from "@/atom/atom/HTag";
import {NotoSansFont, RussoOneFont} from "@/styles/font/fontStyle";
import PTag from "@/atom/atom/PTag";


const ProjectHighLightStyle = styled(DisplayFlexContainer(flexDirectionEnum.c, justifyContentEnum.c, alignItemsEnum.c))`
  width: 100%;
  padding-bottom: 50px;
  text-align: center;
`

const TitleH2Style = css`
  ${LargeTitleFontSizePC};
  font-weight: bold;
  color: ${props => props.theme.palette.middle};
  line-height: 1.5;

  ${(props) => props.theme.media.tablet} {
    ${LargeTitleFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${LargeTitleFontSizeMobile};
  }
`

const PeriodPTagStyle = css`
  color: ${props => props.theme.palette.primary};
  ${ContentFontSizePC};

  ${(props) => props.theme.media.tablet} {
    ${ContentFontSizeTablet};
  }

  ${(props) => props.theme.media.mobile} {
    ${ContentFontSizeMobile};
  }
`

/**
 * 프로젝트 선택 시 강조
 * @param project 프로젝트 정보  ProjectInterface 참고
 * @constructor
 */
function ProjectHighLightTitle({project}: ProjectHighLightTitlePropsInterface): React.JSX.Element {

  if (project === undefined) {
    return <ProjectHighLightStyle className={NotoSansFont.className}>Project</ProjectHighLightStyle>;
  }

  return (
    <ProjectHighLightStyle>
      <HTag index={2} $styles={TitleH2Style} content={project?.title || ''} fontStyle={RussoOneFont.className}/>
      <PTag content={project?.period || ''} $styles={PeriodPTagStyle} font={RussoOneFont.className}/>
    </ProjectHighLightStyle>
  )
}

export default React.memo(ProjectHighLightTitle)
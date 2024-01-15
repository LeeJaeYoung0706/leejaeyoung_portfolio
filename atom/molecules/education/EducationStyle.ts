import styled, {css} from "styled-components";

export const EducationImageDivStyle = css`
  position: relative;
  height: 100%;
  width: 100%;
  filter: grayscale(70%);
  opacity: 0.7;
  overflow: hidden;

  ${(props) => props.theme.media.tablet} {

  }

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`
export const EducationImageGrid = css`
  grid-area: educationImageArea;
`
export const AcademyImageGrid = css`
  grid-area: academyImageArea;
`
export const UniversityImageGrid = css`
  grid-area: universityImgArea;
`
export const OnlineImageGrid = css`
  grid-area: onlineImgArea;
`
export const UniversityGrid = css`
  grid-area: university;
`

export const AcademyGrid = css`
  grid-area: academy;
`

export const OnlineGrid = css`
  grid-area: online;
`
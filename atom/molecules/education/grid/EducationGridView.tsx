import styled from "styled-components";
import React from "react";


const EducationGridStyle = styled.article`
  display: grid;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
  max-width: 1500px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'educationImageArea educationImageArea university universityImgArea'
                       'educationImageArea educationImageArea academyImageArea academy'
                       'online online online onlineImgArea'
                       'online online online onlineImgArea';

  ${(props) => props.theme.media.tablet} {
    min-width: 600px;
    max-width: 700px;

    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'university universityImgArea'
                       'academyImageArea academy'
                       'online onlineImgArea'
                       'online onlineImgArea';
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 360px;
    max-width: 370px;
    padding-left: 15px;
    grid-template-columns: 1fr;
    grid-template-areas: 'university'
                       'academy'
                       'online'
                       'online';
    gap: 10px;
  }
;
  grid-gap: 0; /* 각 그리드 아이템 사이의 간격 */
`

function EducationGridView({children}: EducationGridViewPropsInterface) {
  return (
    <EducationGridStyle>
      {children}
    </EducationGridStyle>
  )
}

export default React.memo(EducationGridView)
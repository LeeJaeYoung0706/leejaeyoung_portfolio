import React from "react";
import styled, {css, keyframes} from "styled-components";
import {DisplayFlex} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";


const OpacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const ProjectBorderViewStyle = styled.div<{ $visible: boolean }>`
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;

  ${props => props.$visible && css`animation: ${OpacityAnimation} 1s linear normal`};

  ${(props) => props.theme.media.tablet} {
    ${DisplayFlex(flexDirectionEnum.c, justifyContentEnum.c, alignItemsEnum.c)}
    min-width: 600px;
    max-width: 700px;
  }

  ${(props) => props.theme.media.mobile} {
    min-width: 350px;
    max-width: 360px;
  }
`

/**
 * Project Border View
 * @param children
 * @constructor
 */
const ProjectBorderView = React.forwardRef(({children , visible}: ProjectBorderViewPropsInterface , ref: React.ForwardedRef<HTMLDivElement>): React.JSX.Element => {

  return (
    <ProjectBorderViewStyle ref={ref} $visible={visible}>
      {children}
    </ProjectBorderViewStyle>
  )
})

ProjectBorderView.displayName = "ProjectBorderView";
export default React.memo(ProjectBorderView)
import styled from "styled-components";
import {
  DisplayFlexContainer
} from "@/styles/commonStyles";
import {alignItemsEnum, flexDirectionEnum, justifyContentEnum} from "@/@types/enum";


/**
 * Y 축 , X 축 그리드 Style
 */
export const GridContentLayoutStyle = styled(DisplayFlexContainer(flexDirectionEnum.c , justifyContentEnum.fs , alignItemsEnum.c))`
  flex: 1;
  width: 100%;
  max-height: 30px;
`

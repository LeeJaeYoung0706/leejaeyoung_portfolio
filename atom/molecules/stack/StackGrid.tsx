import StackGridView from "@/atom/molecules/stack/StackGridView";
import React from "react";
import {GridContentLayoutStyle} from "@/atom/molecules/stack/Styles";
import {BackStackLogoArray, EtcStackLogoArray, FrontStackLogoArray} from "@/atom/molecules/stack/data";
import StackLogoGridTitle from "@/atom/atom/stack/title/StackLogoGridTitle";
import StackGridArea from "@/atom/molecules/stack/grid/StackGridArea";
import {AreaBack, AreaEtc, AreaFront} from "@/atom/molecules/stack/grid/StackGridAreaStyle";
import StackLogo from "@/atom/atom/stack/logo/StackLogo";



/**
 * Stack 부분 그리드 영역 Container
 * @constructor
 */
export default function StackGrid(): React.JSX.Element {

  return (
    <StackGridView>
      <StackGridArea $area={AreaFront}>
        <StackLogoGridTitle title={'FRONT'}/>
        {
          FrontStackLogoArray?.length !== 0 &&
          FrontStackLogoArray?.map((value, index) => {
            return (
              <GridContentLayoutStyle key={`${index}${value.src}`}>
                <StackLogo
                  src={value.src}
                  alt={value.alt}
                  text={value.text}
                />
              </GridContentLayoutStyle>
            )
          })
        }
      </StackGridArea>
      <StackGridArea $area={AreaBack}>
        <StackLogoGridTitle title={'BACK'}/>
        {
          BackStackLogoArray?.length !== 0 &&
          BackStackLogoArray?.map((value, index) => {
            return (
              <GridContentLayoutStyle key={`${index}${value.src}`}>
                <StackLogo
                  src={value.src}
                  alt={value.alt}
                  text={value.text}
                />
              </GridContentLayoutStyle>
            )
          })
        }
      </StackGridArea>
      <StackGridArea $area={AreaEtc}>
        <StackLogoGridTitle title={'ETC'}/>
        {
          EtcStackLogoArray?.length !== 0 &&
          EtcStackLogoArray?.map((value, index) => {
            return (
              <GridContentLayoutStyle key={`${index}${value.src}`}>
                <StackLogo
                  src={value.src}
                  alt={value.alt}
                  text={value.text}
                />
              </GridContentLayoutStyle>
            )
          })
        }
      </StackGridArea>
    </StackGridView>
  )
}
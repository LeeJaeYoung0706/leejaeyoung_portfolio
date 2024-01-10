import React, {useEffect, useRef} from "react";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import StackGridAreaView from "@/atom/molecules/stack/grid/StackGirdAreaView";
import {GridAreaPropsInterface} from "@/@types/molecules";

/**
 * Stack 그리드
 * @param children
 * @param $area => area 지정을 위한 Props
 * @constructor
 */
export default function StackGridArea({children, $area}: GridAreaPropsInterface) {

  //visible 체크를 위한 ref
  const ref = useRef<HTMLDivElement | null>(null)
  const [entry, targetId, visible] = useIntersectionObserver(ref, {
    threshold: 0.1,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: true,
  })

  return (
    <StackGridAreaView $stackVisible={visible} $area={$area} ref={ref} >
      {children}
    </StackGridAreaView>
  )
}
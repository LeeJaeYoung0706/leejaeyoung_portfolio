import React, {useEffect, useRef} from "react";
import styled, {css, keyframes} from "styled-components";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import {NanumGodicFont, RussoOneFont} from "@/styles/font/fontStyle";
import {Button} from "@/atom/atom/button/Button";
import {DefaultButtonStyle} from "@/atom/atom/button/ButtonStyles";
import ProjectTextAnimation from "@/atom/atom/animation/TingTongTextAnimation";
import InitPageContentView from "@/atom/molecules/project/init_page/InitPageContentView";




/**
 * 미 선택 시 보여줄 그리드
 * @param onCheckHandler
 * @constructor
 */
export default function InitPageContent({onCheckHandler}: InitPageContentPropsInterface): React.JSX.Element {

  //visible 체크를 위한 ref
  const ref = useRef<HTMLDivElement | null>(null)
  const [entry, targetId, visible] = useIntersectionObserver(ref, {
    threshold: 0.1,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: false,
  })


  return (
    <InitPageContentView
      introduceText={['Working for a ERSolution', '2022.05 ~ 2023.08']}
      buttonComponent={
        <Button
          content={`READ MOREㅤ>`}
          onClick={onCheckHandler}
          font={NanumGodicFont.className}
          $style={DefaultButtonStyle}
        />
      }
    >
      <ProjectTextAnimation visible={visible} content={['P','R','O','J','E','C','T']} ref={ref}/>
    </InitPageContentView>
  )
}


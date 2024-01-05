import {useMotionValueEvent, useScroll} from "framer-motion";
import {useCallback, useRef, useState} from "react";

/**
 * 스크롤 가장 상단 체크 하는 훅
 */
export const useScrollPosition = (): [boolean , boolean , () => void] => {
    const {scrollY} = useScroll()

    const [isTop, setIsTop] = useState<boolean>(true);
    const [visibleTopButton , setVisibleTopButton] = useState<boolean>(true);
    const MoveTop = useCallback( () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [])

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest < 1) {
            setIsTop(() => true)
        }

        if (latest > 1200) {
            setVisibleTopButton( () => true)
        } else {
            setVisibleTopButton( () => false)
        }
        /**
         * State 가 여러번 변경되는 것을 막기 위해서 처리
         */
        if (isTop) {
            if (latest > 1) {
                setIsTop(() => false)
            }
        }

    })

    return [isTop , visibleTopButton , MoveTop]
}
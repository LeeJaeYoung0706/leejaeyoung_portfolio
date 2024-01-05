import React, {RefObject, useEffect, useState} from "react";

interface Args extends IntersectionObserverInit {
    freezeOnceVisible?: boolean
}

/**
 * 타이틀 요소 체크 하는 훅
 * @param elementRef
 * @param threshold
 * @param root
 * @param rootMargin
 * @param freezeOnceVisible
 */
export const useIntersectionObserver = (elementRef: RefObject<Element>,
                                        {
                                            threshold = 1,
                                            root = null,
                                            rootMargin = '0%',
                                            freezeOnceVisible = false,
                                        }: Args,): [IntersectionObserverEntry | undefined, string | undefined, boolean] => {

    const [entry, setEntry] = useState<IntersectionObserverEntry>()

    const frozen = entry?.isIntersecting && freezeOnceVisible

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry)
    }

    useEffect(() => {
        const node = elementRef?.current // DOM Ref 저장
        const hasIOSupport = !!window.IntersectionObserver // 비어 있나 없나 체크 => Boolean 으로 변환
        if (!hasIOSupport || frozen || !node)
            return
        const observerParams = {threshold, root, rootMargin} // Intersection 기본 파라미터
        const observer = new IntersectionObserver(updateEntry, observerParams)
        observer.observe(node) // 지정 ref 관찰
        return () => observer.disconnect() // 끝난 후 종료
    }, [elementRef, threshold, root, rootMargin, frozen])

    return [entry, entry?.target?.id, !!entry?.isIntersecting]
}
'use client'
import {useSearchParams} from "next/navigation";
import {useScrollPosition} from "@/hooks/useScrollPosition";
import MainView from "@/atom/templates/MainView";


export default function Main({children}: MainPropsInterface) {
  const [isTop, visibleTopButton, MoveTop] = useScrollPosition();
  const searchParams = useSearchParams();

  // // 간단하게 비밀번호 처리
  // if (searchParams.get('pwd') !== process.env.NEXT_PUBLIC_DEFAULT_PWD) {
  //   return null;
  // }

  return (
    <MainView>
      {/*{*/}
      {/*  visibleTopButton &&*/}
      {/*  <></>*/}
      {/*  // <Button onClick={MoveTop}*/}
      {/*  //         content={<Image src={'/top_arrow.png'} alt={'top_arrow'} fill sizes={'100px'}/>}*/}
      {/*  //         font={RussoFont.className}*/}
      {/*  //         $type={'up'}*/}
      {/*  // />*/}
      {/*}*/}
      {children}
    </MainView>
  )
}

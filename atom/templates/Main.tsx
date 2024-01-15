'use client'
import {useSearchParams} from "next/navigation";
import {useScrollPosition} from "@/hooks/useScrollPosition";
import MainView from "@/atom/templates/MainView";
import {Button} from "@/atom/atom/button/Button";
import {RussoOneFont} from "@/styles/font/fontStyle";
import Image from "next/image";
import {UpButtonStyle} from "@/atom/atom/button/ButtonStyles";
import ErrorSection from "@/atom/templates/error/ErrorSection";


export default function Main({children}: MainPropsInterface) {
  const [isTop, visibleTopButton, MoveTop] = useScrollPosition();
  const searchParams = useSearchParams();

  // 간단하게 비밀번호 처리
  if (searchParams.get('pwd') !== process.env.NEXT_PUBLIC_DEFAULT_PWD) {
    return <ErrorSection />;
  }

  return (
    <MainView>
      {
        visibleTopButton &&
        <Button
          content={
            <Image src={'/top_arrow.png'} alt={'top_arrow'} fill sizes={'100px'}/>}
          onClick={MoveTop}
          font={RussoOneFont.className}
          $style={UpButtonStyle}
        />
      }
      {children}
    </MainView>
  )
}

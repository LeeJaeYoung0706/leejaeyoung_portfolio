
import {NextFont} from "next/dist/compiled/@next/font";
import {
  Nanum_Gothic, Noto_Sans, Russo_One,
} from "next/font/google";


export const NanumGodicFont: NextFont = Nanum_Gothic({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const NotoSansFont: NextFont = Noto_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export const RussoOneFont  = Russo_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
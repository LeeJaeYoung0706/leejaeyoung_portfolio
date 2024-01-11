import type {Metadata} from 'next'
import StyledComponentsRegistry from "@/styles/StyledComponentRegistry";
import {ThemeHandlerProvider} from "@/styles/ThemeHandlerContext";
import {ContainerLayoutStyle, MainViewLayoutStyle} from "@/atom/templates/styles";
import Header from "@/atom/organisms/header/Header";
import Footer from "@/atom/organisms/footer/Footer";
import {NextSeo} from "next-seo";


export const metadata: Metadata = {
  title: {
    default: 'LeeJaeYoung_portfolio',
    template: '%s | LeeJaeYoung_portfolio',
  },
  description: '프론트개발자 포트폴리오',
  keywords: ['Next.js', '프론트엔드', '프론트개발자', '포트폴리오'],
  creator: 'Lee Jae Young',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextSeo
        title={'이재영 개발자 포트폴리오'}
        description={'Next.js를 활용한 이재영 개발자 포트폴리오입니다.'}
      />
      <StyledComponentsRegistry>
        <ThemeHandlerProvider>
          <body>
            <Header />
            {children}
            <Footer />
          </body>
        </ThemeHandlerProvider>
      </StyledComponentsRegistry>
    </html>
  )
}

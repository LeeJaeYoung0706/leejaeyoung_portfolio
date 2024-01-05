/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true, // 클래스명에 컴포넌트 이름을 붙임
      pure: true, // dead code elimination (사용되지 않는 속성 제거)
    },
  },
  webpack: (config) => {  //svg 애니메이션 처리를 위한 Webpack  설정
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  experimental: {  // Theme 변경 시 Link 태그를 쓸 때 Scroll UP 되는 현상 처리
    scrollRestoration: true
  }
}

module.exports = nextConfig

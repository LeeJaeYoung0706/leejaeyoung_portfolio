import {
  FunctionsGrid,
  FunctionsTitleGrid, IntroductionGrid,
  IntroductionTitleGrid, ResponsibilitiesGrid,
  ResponsibilitiesTitleGrid, ReviewGrid,
  ReviewTitleGrid, StackGrid, StackTitleGrid
} from "@/atom/molecules/project/border/grid/StyleGridArea";

export const initProjectList: ProjectListInterface[] = [
  {
    index: 0,
    company: 'LNKorea',
    title: "Doobo",
    period: "2025.01 ~ 2025.11",
    checked: false,
    stack: ["Java", "JavaScript", "Thymeleaf", "MS-SQL", "Linux", "Socket", "KeyCloak", "Jenkins"],
    introductionTitle: "곡류 가공유통 업체",
    introduction: "곡류 가공 ERP 연동 MES 개발",
    responsibilities: [
        "ERP ↔ MES 동기화 모듈 설계 및 개발. ( 수주, 구매발주, 매입, 매출, 기준정보 등 )",
        "수주 EDI 업로드 서비스",
        "순차 제조 지시 서비스.",
        "공통 모듈.",
        "MES 시스템 ( 생산계획, 구매발주, 수주, 재고입출고, 수불, 기준 정보 등 ).",
        "SMART FACTORY API Socket 서비스 개발." ,
        "품질 관리, 재고, 생산/설비 종합 효율 등에 관련된 현황."
    ],
    functions: [
      "ERP ↔ MES 동기화 모듈 설계 및 개발.",
      "Organization 멤버 초대 ( Email ) 및 멤버 관리 기능.",
      "KeyCloak 인가서버 기반 OIDC ( GitHub, Google ) 제공.",
      "AAS 관련 정보 Filter, Topic 등을 사용하여 동적으로 검색하는 기능.",
      "Json Type로 AAS 관련 정보 제공.",
      "회원 및 조직 관리 기능.",
      "Organization, Member, Application 레벨에 따른 기능 접근 권한 세부 처리."
    ],
    link: "https://cheddar-harrier-847.notion.site/2aac5b1ce1d9804aac54d7068a503fa3?source=copy_link",
    review: "React.js의 추상화, 모듈화, 컴포넌트의 중요성과 ReactQuery, Memo, useCallback 등 애플리케이션 최적화에 대해서 공부를 하면서 하나씩 프로젝트에 적용시켰고 OAuth2의 인가, 인증 과정을 Spring, KeyCloak 으로 구현하면서 OIDC 흐름, 객체 지향, 관점 분리 개발에 대해서 많이 고민하고 습득할 수 있었던 프로젝트였습니다. "
  },
  {
    index: 1,
    title: "IDTHUB",
    company: 'ERSolution',
    period: "2023.07 ~ 2023.08",
    checked: false,
    stack: ["React.js", "TypeScript", "Node.js Express", "SpringBoot",
      "PostgreSQL", "OAuth2", "KeyCloak", "Swagger", "JUnit, Mockito",
      "ReactQuery", "Axios", "Redux", "ReactRouter", "React-i18next", "Chart.js", "Prettier", "ESLint"
    ],
    introductionTitle: "한국 전자 기술 연구원 (KETI) 에서 발주한 GitHub 벤치마킹 AAS 관리 플랫폼.",
    introduction: "AAS 관리를 목적으로 Github 를 벤치마킹하여 Template , Organization , Product 등을 공유하고 관리하는 기능을 제공.",
    responsibilities: ["React.js, TypeScript 기반의 웹 애플리케이션 Front 메인 개인 개발.", "ReactQuery, 메모이제이션으로 애플리케이션 최적화."
      , "KeyCloak 인가 서버 및 REST API 개발 (초기 개발 100%).", "CustomHook, Axios, ReactQuery 에 대한 모듈화.", "유효성 검증 향상 (Test Code 작성 및 AOP , Input Validation).",
      "Redux, Router, Guard, Context API, LocalStorage 전역 상태 관리 설정."
    ],
    functions: [
      "Template, Organization, Product 공유 및 즐겨찾기, 관리기능.",
      "Organization 멤버 초대 ( Email ) 및 멤버 관리 기능.",
      "KeyCloak 인가서버 기반 OIDC ( GitHub, Google ) 제공.",
      "AAS 관련 정보 Filter, Topic 등을 사용하여 동적으로 검색하는 기능.",
      "Json Type로 AAS 관련 정보 제공.",
      "회원 및 조직 관리 기능.",
      "Organization, Member, Application 레벨에 따른 기능 접근 권한 세부 처리."
    ],
    link: "https://cheddar-harrier-847.notion.site/2aac5b1ce1d9804aac54d7068a503fa3?source=copy_link",
    review: "React.js의 추상화, 모듈화, 컴포넌트의 중요성과 ReactQuery, Memo, useCallback 등 애플리케이션 최적화에 대해서 공부를 하면서 하나씩 프로젝트에 적용시켰고 OAuth2의 인가, 인증 과정을 Spring, KeyCloak 으로 구현하면서 OIDC 흐름, 객체 지향, 관점 분리 개발에 대해서 많이 고민하고 습득할 수 있었던 프로젝트였습니다. "
  },
  {
    index: 2,
    title: "Chacarda",
    company: 'ERSolution',
    period: "2023.04 ~ 2023.08",
    checked: false,
    stack: ["React.js", "NEXT.js", "Node.js Express", "AWS S3 , EC2 , Aurora", "MySQL", "AWS S3 Multer", "Sequelize",
      "Nginx", "Swagger",
      "Axios", "Redux", "ReactRouter", "React-i18next", "Chart.js", "Prettier", "ESLint", "SCSS", "Styled-Component", "React-GoogleMap"
    ],
    introductionTitle: "ERSolution 차량 관제 자체 솔루션.",
    introduction: "ERSolution 자체 솔루션으로서 차량 관제에 관한 모니터링, 대시보드, 운전자 및 하청업체 차량 관련 전반적인 관리 등을 제공.",
    responsibilities: [
      "React.js, Next.js 기반의 웹 애플리케이션 Front 메인 개발 ( Front 65% )",
      "AWS S3를 사용한 블랙박스 영상 저장 관련 REST API (Node Express) 개발 및 AWS 서버 개발.",
      "로그인 ( 2차 로그인 문자 인증 ), 마스킹 문자 인증 개발 ( Front 100% , Back Web REST API 20% )",
      "React Memoization 및 LayoutPattern 적용으로 애플리케이션 최적화.",
      "모니터링 ,대시 보드, 사용자, 차량, 배차, 운전자, 로그 ,그룹 관리 등 CMS 전반에 대한 기능 개발.",
      "Redux, Router, Guard, Context API, LocalStorage 전역 상태 관리 설정.",
      "부산 수영로 교회 [Sub] : 배차 관리 기능 ( 시간, 차량에 따라 배차 등록 및 수정, 삭제 ) 개발.",
      "학교 태블릿 충전기 관제 [Sub] : Styled-Component 퍼블리싱 , SCSS 퍼블리싱 , A/S 상태 관리 기능 개발.",
      "제설기 관제 [Sub] : 모니터링 제설기 관련, 동적인 Deps 호출 및 Deps 형태로 관리할 수 있도록 Front 로직 변경 작업."
    ],
    functions: [
      "운수사 별, 관제사 별로 차량 위치 및 대시보드.",
      "운전자, 사용자, 차량, 운수사에 대한 관리 기능.",
      "차량 운행 정보 관리 및 ETAS 제출 기능.",
      "위치 정보 사업자 등록을 위한 위치 정보 조회 및 사용자 로그 조회, 마스킹, 2차 로그인 기능.",
      "부산 수영로 교회 [Sub] : 배차 관리 및 소모품 관리 기능 추가.",
      "제설기 관제 [Sub] : 동적인 Deps 관리, 살포기 단계 관리 기능 추가.",
      "학교 태블릿 충전기 관제 [Sub] : 태블릿 관제를 위해 학교측 관리 시스템 추가.",
      "사고 발생 시 블랙 박스 영상 저장 기능."
    ],
    link: "https://cheddar-harrier-847.notion.site/2aac5b1ce1d9804aac54d7068a503fa3?source=copy_link",
    review: "처음으로 팀원과 진행한 협업 프로젝트였습니다. 개발을 진행하면서 많은 충돌이 있어서 에자일 방법론을 택하여 주기적으로 1~2시간씩 꾸준하게 회의하면서 문제가 되는 부분들을 협업하는 팀원과 맞춰가면서 진행했습니다. 이때 에자일 방법론이 개발에 있어서 정말 필요한 개발 방법론이라고 생각이 됐었습니다. 워터폴 방법론을 선택해서 진행했다면 개발 속도는 빨랐겠지만, 제가 납득하지 못한 방식으로 개발을 진행할 수도 있고 에자일 방법론에서 가질 수 있는 여러 의견 수렴, 시행착오, 기술 조사를 통해 얻을 수 있는 저의 역량 개발의 기회가 적으리라 생각되기 때문입니다.",
  },
  {
    index: 3,
    title: "LucyMax",
    company: 'ERSolution',
    period: "2022.11 ~ 2022.12",
    checked: false,
    stack: ["React.js", "Node.js Express", "MySQL", "Sequelize", "Nginx", "Swagger", "Mui",
      "Axios", "Redux", "ReactRouter", "React-i18next", "Toss Payment Module"
    ],
    introductionTitle: "5 ~ 9 세를 타겟으로 한 원어민 영어 강의 플랫폼.",
    introduction: "강의에 필요한 결제 및 회원, 강사 관리 기능을 제공, 동영상 강의 기능은 제공하지 않음.",
    responsibilities: ["Back(Node.js) , Front(React.js) , AWS (EC2 , Nginx) 1인 개발.", "토스 결제 모듈", "PM2 무중단 배포.", "Redux, Router, Guard, Context API, LocalStorage 전역 상태 관리 설정."],
    functions: [
      "회원 관리 기능 및 강사, 관리자 권한에 따른 분리형 관리페이지 제공.",
      "수강 관리, 결제 관리, 팝업 등 CMS 기능.",
      "토스 결제 모듈을 활용한 결제 기능 및 무통장 입금을 통한 수기 결제 기능."
    ],
    link: "https://cheddar-harrier-847.notion.site/2aac5b1ce1d9804aac54d7068a503fa3?source=copy_link",
    review: "React 프레임워크를 사용해 개발한 ERSolution 프로젝트를 개발하고나서 3개월 동안 JSP,Spring,Angular 유지보수만을 하고 있었기 때문에 React.js를 접하지 못해 잊어가고 있었던 대한 기초 개념을 다시 익힐 수 있었고 Node.js 또한 처음으로 접했기 때문에 구조와 원리를 공부하면서 진행했던 프로젝트입니다. 아쉬웠던 점은 모듈화나 추상화에 대해서 고민을 해보지 못했던 점이 아쉬웠고 다음 프로젝트에는 적용해보자고 다짐했던 것 같습니다. "
  },
  {
    index: 4,
    title: "Bigaza",
    company: 'ERSolution',
    period: "2022.07 ~ 2023.08",
    checked: false,
    stack: ["JSP", "SpringBoot", "MyBatis", "MySQL", "Jquery", "Nginx", "Tomcat", "PHP"],
    introductionTitle: "경제/보험 관련 강의 플랫폼",
    introduction: "경제/보험에 관련하여 여러 종류의 동영상 강의 제공 및 결제, 지사, 회원, 결제 관리 기능 제공",
    responsibilities: ["유지보수 담당.", "클라이언트 요구사항 처리 ( UI , 추가 기능 협의 및 개발 ).", "배너 순서 변경 기능, 지사 관리 및 지사 관련 기능, 회원 현황 모니터링 기능, 수수료 관련 기능 개발."],
    functions: [
      "보험 및 경제에 대한 동영상 강의 교육 기능, FA 회원 및 일반 회원에 따라 다른 영상을 노출.",
      "영상에 관한 관리 / 회원 관리 / 지사 관리 / 수수료 관리 / 결제 관리 , 고객 센터 및 배너 관리 등의 CMS 기능.",
      "본사에서 회원 관리 및 지사 관리가 가능하고 지사가 소속된 회원들에게 결제를 받아 수수료를 납입하는 기능",
      "이노 페이 결제 모듈 / 월 자동 결제 적용",
      "회원 초대 시, 로그인 시 포인트를 획득, 포인트 결제 가능",
    ],
    link: "https://cheddar-harrier-847.notion.site/2aac5b1ce1d9804aac54d7068a503fa3?source=copy_link",
    review: "처음으로 유지보수를 하게 된 프로젝트였는데 제가 짠 코드가 아니라서 코드의 흐름을 알기 힘들었고 기능이 불명확하게 나누어져 있어서 확장이나 수정하기가 매우 어려웠습니다. 이 때문에 다른 개발자도 편하게 볼 수 있는 클린 코드를 작성하고 싶어졌고 이를 실현하기 위해서 클린 코드에 관련된 책을 읽거나 여러 온라인 강의를 수강했습니다. 하지만 공부할수록 클린 코드를 작성하는 것이 얼마나 어려운지 깨닫게 되었고 여전히 이를 실현하기 위해서 꾸준히 노력하고 있습니다."
  },
  {
    index: 5,
    title: "ERSolution",
    company: 'ERSolution',
    period: "2022.06 ~ 2022.06",
    checked: false,
    stack: ["SpringBoot", "JSP", "MyBatis", "MySQL", "React.js", "Redux", "ReactRouter", " KendoUI", "Jquery", "Kakao-Map"],
    introductionTitle: "입사 후 교육을 위한 ERSolution 홈페이지",
    introduction: "회사 소개 홈페이지로서 팝업, 고객 문의 ( 이메일 ), 회원, 관리자 관리 등을 제공.",
    responsibilities: ["Back(SpringBoot) , Front(React.js , JSP) , AWS (EC2 , Nginx)1인 개발"],
    functions: [
      "팝업 관리, 관리자 관리, 고객 문의 관리 등 CMS 기능.",
      "고객 문의의 경우 SMTP을 통해 메일 회신 및 파일 첨부 기능",
      "팝업의 경우 Editor 사용을 통해 팝업에 대한 상세 조절,생성 가능"
    ],
    link: "https://cheddar-harrier-847.notion.site/2aac5b1ce1d9804aac54d7068a503fa3?source=copy_link",
    review: "React.js를 처음 접했고 참고할 코드나 좋은 강의가 없어서 어려웠습니다. 개발 기간이 3주 정도였기 때문에 개념을 공부하면서 개발하기 급급해서 컴포넌트, 리렌더링과 같은 것들은 신경을 쓰지 못했습니다. 또한 REST API를 처음 접했기 때문에 Filter 나 Cors와 같은 HTTP와 관련된 지식을 습득하는 것에 많은 시간을 투자해야 했기 때문에 더욱더 시간이 촉박한 프로젝트였습니다. 하지만 새로운 것을 배우면서 개발하는 것이 재밌고 즐거웠기 때문에 ERSolution에서 가장 보람차고 기억에 남는 프로젝트입니다."
  },
  {
    index: 6,
    title: "Portfolio",
    company: 'Alone',
    period: "2023.11 ~ 2023.12",
    checked: false,
    stack: ["React.js", "NEXT.js", "Redux", "ESLint", "Prettier", "Styled-Component", "NEXT-SEO"],
    introductionTitle: "개인 토이 프로젝트 < 포트폴리오 > ",
    introduction: "Styled-Components, CSS3의 역량 향상 목적 및 개인 이력서에 대한 정보를 제공.",
    responsibilities: ["NEXT.js 기반 개인 개발"],
    functions: [
      "개인 이력서 정보 제공.",
      "반응형 웹"
    ],
    link: "https://github.com/LeeJaeYoung0706/leejaeyoung_portfolio",
    review: "Styled-Components와 css3을 사용하고 라이브러리를 최대한 지양하면서 레이아웃작업부터 끝까지 해보고 싶었습니다. 회사에서는 어느 정도 틀이 나온 상태로 작업을 했었기 때문에 경험해보고 싶었고 기초를 다시 한번 되돌아보고 많은 것들을 알 수 있는 프로젝트였습니다."
  },
]


export const projectGridArray = (project: ProjectListInterface) => [
  {
    $area: IntroductionTitleGrid,
    $checked: true,
    key: `${project}-grid1`
  },
  {
    $area: ResponsibilitiesTitleGrid,
    $checked: true,
    key: `${project}-grid2`
  },
  {
    $area: ReviewTitleGrid,
    $checked: true,
    key: `${project}-grid3`
  },
  {
    $area: FunctionsTitleGrid,
    $checked: true,
    key: `${project}-grid4`
  },
  {
    $area: StackTitleGrid,
    $checked: true,
    key: `${project}-grid5`
  },

  {
    $area: IntroductionGrid,
    $checked: false,
    key: `${project}-${project?.introductionTitle}`,
    keyValue: 'introduce',
    title: '소개',
    position: false,
    content: [project?.introductionTitle || '', project?.introduction || '']
  },
  {
    $area: ResponsibilitiesGrid,
    $checked: false,
    key: `${project}-${project?.responsibilities}`,
    title: '담당',
    keyValue: 'response',
    position: true,
    content: project?.responsibilities || []
  },
  {
    $area: FunctionsGrid,
    $checked: false,
    key: `${project}-${project?.functions}`,
    title: '문제 & 해결',
    keyValue: 'functions',
    position: false,
    content: project?.functions || []
  },
  {
    $area: StackGrid,
    $checked: false,
    key: `${project}-${project?.stack}`,
    title: '기술',
    keyValue: 'stack',
    position: true,
    content: project?.stack || []
  },
  {
    $area: ReviewGrid,
    $checked: false,
    key: `${project}-${project?.review}`,
    title: '후기',
    keyValue: 'review',
    position: true,
    content: [project?.review] || []
  },
]
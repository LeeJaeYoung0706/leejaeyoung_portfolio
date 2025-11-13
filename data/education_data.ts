import {
  AcademyGrid,
  AcademyImageGrid,
  EducationImageGrid, OnlineGrid,
  OnlineImageGrid, UniversityGrid,
  UniversityImageGrid
} from "@/atom/molecules/education/EducationStyle";

export const educationImageArray: EducationImageArrayValueInterface[] = [
  {
    $area: EducationImageGrid,
    src: '/education.jpg',
    alt: 'education'
  },
  {
    $area: UniversityImageGrid,
    src: '/university.jpg',
    alt: 'university'
  },
  {
    $area: AcademyImageGrid,
    src: '/academy.jpg',
    alt: 'academy'
  },
  {
    $area: OnlineImageGrid,
    src: '/responsibilities.jpg',
    alt: 'online'
  },

]
export const educationArray: EducationArrayValueInterface[] = [
  {
    index: 0,
    $area: UniversityGrid,
    partTitle: ['성결대학교', '산업경영공학과'],
    content: ['주 / 야간 : 주간', '학점 : 3.47 / 4.5'],
  },
  {
    index: 1,
    $area: AcademyGrid,
    partTitle: ['Java 웹/앱', '애플리케이션 개발'],
    content: ['2021.11 ~ 2022.04 ( 6개월 )', 'Springframework 기반 웹 애플리케이션 프로젝트 개발'],

  },
  {
    index: 2,
    $area: OnlineGrid,
    partTitle: ['온라인 강의', '인프런 , 코딩애플'],
    content: [
      ` <span class="education_notion_span">STUDY Notion</span>
        <a href='https://cheddar-harrier-847.notion.site/STUDY-ARCHIVE-279c5b1ce1d980949923e6d30ca1bf4a?source=copy_link' class="education_a">
         <span class="education_notion_read_more"> READ MORE&nbsp; &gt; </span>
       </a>
       <p>이펙티브 자바 완벽 공략 1, 2부</p>
       <p>GodOfDesignPattern</p>
       <p>The Java ( Test Code )</p>
       <p> Spring Boot 기반으로 개발하는 Spring Security</p>
        <p>Spring MVC 1,2편, Spring 기본 원리, 고급 원리, 핵심 원리</p>
       <p>Spring DATA JPA, 자바 ORM 표준 JPA 기본편, Query DSL, 실전! 스프링 부트와 JPA 활용 1, 2</p>
       <p>모든 개발자를 위한 HTTP 웹 기본 지식</p>
       <p>Next.js 기반으로 지도 앱 만들기</p>
       <p>React.js 시작하기 , Next.js App Router</p>
       <p>실전! 퍼블리싱</p>
       <p>JavaScript ES6 입문</p>
     `,
     //  ` <span class="education_notion_span">장수원</span>
     //    <a href='https://www.notion.so/leejaeyoung/Spring-Security-320729eed72f4502b2bbcf4f25507cfd' class="education_a">
     //     <span class="education_notion_read_more"> READ MORE&nbsp; &gt; </span>
     //   </a>
     //   <p> Spring Boot 기반으로 개발하는 Spring Security</p>
     // `,
     //
     //  ` <span class="education_notion_span">Front</span>
     //    <a href='https://www.notion.so/leejaeyoung/Front-9e4cb98808504f2e9d7a3dee2f89ad36' class="education_a">
     //     <span class="education_notion_read_more"> READ MORE&nbsp; &gt; </span>
     //   </a>
     //   <p>Next.js 기반으로 지도 앱 만들기</p>
     //   <p>React.js 시작하기 , Next.js App Router</p>
     //   <p>실전! 퍼블리싱</p>
     //   <p>JavaScript ES6 입문</p>
     // `,
     //
     //  ` <span class="education_notion_span">김영한</span>
     //    <a href='https://www.notion.so/leejaeyoung/502b436744684ee2848081b9fd7709e6' class="education_a">
     //     <span class="education_notion_read_more"> READ MORE&nbsp; &gt; </span>
     //   </a>
     //   <p>Spring MVC 1,2편, Spring 기본 원리, 고급 원리, 핵심 원리</p>
     //   <p>Spring DATA JPA, 자바 ORM 표준 JPA 기본편, Query DSL, 실전! 스프링 부트와 JPA 활용 1, 2</p>
     //   <p>모든 개발자를 위한 HTTP 웹 기본 지식</p>
     // `,
    ]
  },
]
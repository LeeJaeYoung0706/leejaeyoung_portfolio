import Container from "@/atom/templates/Container";
import Main from "@/atom/templates/Main";
import Intro from "@/atom/organisms/intro/Intro";
import React from "react";
import AboutMe from "@/atom/organisms/about_me/AboutMe";


export default function Home() {
  return (
    <Container>
      <Main>
        <Intro />
        <AboutMe />
      </Main>
    </Container>
  )
}

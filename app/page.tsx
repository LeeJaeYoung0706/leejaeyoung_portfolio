import Container from "@/atom/templates/Container";
import Main from "@/atom/templates/Main";
import Intro from "@/atom/organisms/intro/Intro";
import React from "react";
import AboutMe from "@/atom/organisms/about_me/AboutMe";
import Stack from "@/atom/organisms/stack/Stack";
import Project from "@/atom/organisms/project/Project";
import Education from "@/atom/organisms/education/Education";


export default function Home() {
    return (
        <Container>
            <Main>
                <Intro/>
                <AboutMe/>
                <Stack/>
                <Project/>
                <Education/>
            </Main>
        </Container>
    )
}

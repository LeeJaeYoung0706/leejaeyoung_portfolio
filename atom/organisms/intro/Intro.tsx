'use client'
import IntroView from "@/atom/organisms/intro/IntroView";
import React from "react";
import IntroImage from "@/atom/molecules/intro/IntroImage";

/**
 * Intro Container
 * @constructor
 */
export default function Intro(): React.JSX.Element {
  return (
    <IntroView>
      <IntroImage />
    </IntroView>
  )
}

import styled, {css} from "styled-components";
import React, {useState} from "react";
import {HoverPos} from "@/atom/atom/about_me_second/cards/FirstCard";
import {NanumGodicFont} from "@/styles/font/fontStyle";
import Image from "next/image";
import ImageDiv from "@/atom/atom/ImageDiv";
import {EducationImageDivStyle} from "@/atom/molecules/education/EducationStyle";
import Link from "next/link";




const Box = styled.div`
    position: absolute;
    padding: 10px;
    text-align: right;
    background: ${props => props.theme.palette.reverse70};
    // border-radius: 30px ;
    //  box-shadow: ${props => props.theme.palette.primary70} -7px 7px 29px 0px;
    transform-origin: bottom left;
    transition: all 1s ease-in-out;
    width: 100%;
    height: 100%;
    bottom: -100%;
    left: -100%;
`;


const Card = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: #eee;
    box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2);
`;

const base = {
    left: "polygon(0 0, 33% 0, 33% 100%, 0 100%)",
    mid: "polygon(33% 0, 66% 0, 66% 100%, 33% 100%)",
    right: "polygon(66% 0, 100% 0, 100% 100%, 66% 100%)",
};
const expand = {
    left: "polygon(0 0, 75% 0, 75% 100%, 0 100%)",
    mid:  "polygon(12% 0, 88% 0, 88% 100%, 12% 100%)",
    right:"polygon(30% 0, 100% 0, 100% 100%, 30% 100%)",
};

const shrink = {
    left_mid:   "polygon(70% 0, 82% 0, 82% 100%, 70% 100%)",
    left_right: "polygon(82% 0, 100% 0, 100% 100%, 82% 100%)",
    
    mid_left:   "polygon(0 0, 12% 0, 12% 100%, 0 100%)",
    mid_right:  "polygon(88% 0, 100% 0, 100% 100%, 88% 100%)",

    right_left: "polygon(0 0, 18% 0, 18% 100%, 0 100%)",
    right_mid:  "polygon(18% 0, 30% 0, 30% 100%, 18% 100%)",
};

export const Piece = styled.div<{ $pos: "left" | "mid" | "right" }>`
    position: absolute;
    inset: 0;
    transition: clip-path 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 24px Arial;
    color: #fff;
    padding: 5px;

    ${({ $pos }) =>
            $pos === "left" &&
            css`
                background: ${p => p.theme.palette.reverse};
                clip-path: ${base.left};
                --cx: 16.5%;
            `}
    ${({ $pos }) =>
            $pos === "mid" &&
            css`
                background: ${p => p.theme.palette.second};
                clip-path: ${base.mid};
                --cx: 49.5%;
            `}
    ${({ $pos }) =>
            $pos === "right" &&
            css`
                background: ${p => p.theme.palette.middle};
                clip-path: ${base.right};
                --cx: 83%;
            `}
    &:hover {
        z-index: 2;
    }

    .content {
        position: absolute;
        top: 50%;
        left: var(--cx, 50%);
        transform: translate(-50%, -50%);
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    ${Card}[data-hover="left"] & {
        ${({ $pos }) =>
                $pos === "left"
                        ? css`
                            clip-path: ${expand.left};
                            z-index: 2;
                            --cx: 10.5%;
                        `
                        : $pos === "mid"
                                ? css`
                                    clip-path: ${shrink.left_mid};
                                    z-index: 1;
                                    --cx: 76%;
                                `
                                : css`
                                    clip-path: ${shrink.left_right};
                                    z-index: 1;
                                    --cx: 91%;
                                `}
    }

    ${Card}[data-hover="mid"] & {
        ${({ $pos }) =>
                $pos === "mid"
                        ? css`
                            clip-path: ${expand.mid};
                            z-index: 2;
                            --cx: 50%;
                        `
                        : $pos === "left"
                                ? css`
                                    clip-path: ${shrink.mid_left};
                                    z-index: 1;
                                    --cx: 6%;
                                `
                                : css`
                                    clip-path: ${shrink.mid_right};
                                    z-index: 1;
                                    --cx: 94%;
                                `}
    }

    ${Card}[data-hover="right"] & {
        ${({ $pos }) =>
                $pos === "right"
                        ? css`
                            clip-path: ${expand.right};
                            z-index: 2;
                            --cx: 65%;
                        `
                        : $pos === "left"
                                ? css`
                                    clip-path: ${shrink.right_left};
                                    z-index: 1;
                                    --cx: 9%;
                                `
                                : css`
                                    clip-path: ${shrink.right_mid};
                                    z-index: 1;
                                    --cx: 24%;
                                `}
    }
`;



interface CardComponentChildrenPropsInterface {
    children: ReactNodeType;
    hover: HoverPos;
    setHover: (pos: HoverPos) => void;
}

export const AboutMeImageDivStyle = css`
  position: relative;
  height: 70px;
  width: 70px;
  filter: grayscale(70%);
  opacity: 0.9;
  overflow: hidden;

  ${(props) => props.theme.media.tablet} {

  }

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`

const HoverLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.25s ease, filter 0.25s ease, opacity 0.25s ease;

  &:hover {
    transform: scale(1.5);
    filter: brightness(1.1);
    opacity: 1;
  }
`;

export default function FirstCardView({children , hover , setHover} : CardComponentChildrenPropsInterface) {



    return <>

        <Box className={"box"}>
            {children}
            <Card data-hover={hover ?? ""}>
                <Piece
                    $pos="left"
                    onMouseEnter={() => setHover("left")}
                    onMouseLeave={() => setHover(null)}
                    className={NanumGodicFont.className}
                >
                    <div className="content">
                        Info
                    </div>
                </Piece>

                <Piece
                    $pos="mid"
                    onMouseEnter={() => setHover("mid")}
                    onMouseLeave={() => setHover(null)}
                    className={NanumGodicFont.className}
                >
                    <div className="content">
                        <HoverLink href={"https://www.naver.com"}>
                            <ImageDiv
                                src={"/notion.png"} alt={"notion"}
                                size={'100px'}
                                $divStyle={
                                    AboutMeImageDivStyle
                                }
                                fill={true}
                            />
                        </HoverLink>
                    </div>
                </Piece>

                <Piece
                    $pos="right"
                    onMouseEnter={() => setHover("right")}
                    onMouseLeave={() => setHover(null)}
                    className={NanumGodicFont.className}
                >
                    <div className="content">
                        <HoverLink href={"https://www.naver.com"}>
                            <ImageDiv
                                src={"/github.png"} alt={"github"}
                                size={'100px'}
                                $divStyle={
                                    AboutMeImageDivStyle
                                }
                                fill={true}
                            />
                        </HoverLink>
                    </div>
                </Piece>
            </Card>
        </Box>

    </>
}
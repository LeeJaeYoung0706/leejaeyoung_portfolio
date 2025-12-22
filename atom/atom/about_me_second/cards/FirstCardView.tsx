
import styled, {css} from "styled-components";
import React, {useState} from "react";
import {HoverPos} from "@/atom/atom/about_me_second/cards/FirstCard";




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
    left: "polygon(0 0, 75% 0, 70% 100%, 0 100%)",
    mid: "polygon(15% 0, 85% 0, 85% 100%, 15% 100%)",
    right: "polygon(30% 0, 100% 0, 100% 100%, 30% 100%)",
};

const shrink = {
    // left hover 시 나머지 2개를 오른쪽으로 몰아서 좁힘
    left_mid: "polygon(70% 0, 82% 0, 82% 100%, 70% 100%)",
    left_right: "polygon(82% 0, 100% 0, 100% 100%, 82% 100%)",

    // mid hover 시 양쪽을 좁힘
    mid_left: "polygon(0 0, 12% 0, 12% 100%, 0 100%)",
    mid_right: "polygon(88% 0, 100% 0, 100% 100%, 88% 100%)",

    // right hover 시 나머지 2개를 왼쪽으로 몰아서 좁힘
    right_left: "polygon(0 0, 18% 0, 18% 100%, 0 100%)",
    right_mid: "polygon(18% 0, 30% 0, 30% 100%, 18% 100%)",
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

  ${({ $pos }) =>
    $pos === "left" &&
    css`
      background: ${props => props.theme.palette.reverse};
      clip-path: ${base.left};
    `}
  ${({ $pos }) =>
    $pos === "mid" &&
    css`
      background: ${props => props.theme.palette.second};
      clip-path: ${base.mid};
    `}
  ${({ $pos }) =>
    $pos === "right" &&
    css`
      background: ${props => props.theme.palette.middle};
      clip-path: ${base.right};
    `}

  /* hover 대상은 위로 */
  &:hover {
    z-index: 2;
  }


  ${Card}[data-hover="left"] & {
    ${({ $pos }) =>
    $pos === "left"
        ? css`
            clip-path: ${expand.left};
            z-index: 2;
          `
        : $pos === "mid"
            ? css`
            clip-path: ${shrink.left_mid};
            z-index: 1;
          `
            : css`
            clip-path: ${shrink.left_right};
            z-index: 1;
          `}
  }

  ${Card}[data-hover="mid"] & {
    ${({ $pos }) =>
    $pos === "mid"
        ? css`
            clip-path: ${expand.mid};
            z-index: 2;
          `
        : $pos === "left"
            ? css`
            clip-path: ${shrink.mid_left};
            z-index: 1;
          `
            : css`
            clip-path: ${shrink.mid_right};
            z-index: 1;
          `}
  }

  ${Card}[data-hover="right"] & {
    ${({ $pos }) =>
    $pos === "right"
        ? css`
            clip-path: ${expand.right};
            z-index: 2;
          `
        : $pos === "left"
            ? css`
            clip-path: ${shrink.right_left};
            z-index: 1;
          `
            : css`
            clip-path: ${shrink.right_mid};
            z-index: 1;
          `}
  }
`;




interface CardComponentChildrenPropsInterface {
    children: ReactNodeType;
    hover: HoverPos;
    setHover: (pos: HoverPos) => void;
}


export default function FirstCardView({children , hover , setHover} : CardComponentChildrenPropsInterface) {



    return <>

        <Box className={"box"}>
            {children}
            <Card data-hover={hover ?? ""}>
                <Piece
                    $pos="left"
                    onMouseEnter={() => setHover("left")}
                    onMouseLeave={() => setHover(null)}
                >
                    A
                </Piece>

                <Piece
                    $pos="mid"
                    onMouseEnter={() => setHover("mid")}
                    onMouseLeave={() => setHover(null)}
                >
                    B
                </Piece>

                <Piece
                    $pos="right"
                    onMouseEnter={() => setHover("right")}
                    onMouseLeave={() => setHover(null)}
                >
                    C
                </Piece>
            </Card>
        </Box>

    </>
}
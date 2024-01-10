import React from "react";
import styled, {RuleSet} from "styled-components";
import {RussoOneFont} from "@/styles/font/fontStyle";


const H1Style = styled.h1<{ $styles?: RuleSet<Object> }>`
  font-size: 34px;
  font-weight: bold;
  ${props => props.$styles};
  
  ${(props) => props.theme.media.mobile} {
    font-size: 24px
  }
`;
const H2Style = styled.h2<{ $styles?: RuleSet<Object> }>`
  font-size: 30px;
  font-weight: bold;
  ${props => props.$styles};
`;
const H3Style = styled.h3<{ $styles?: RuleSet<Object> }>`
  font-size: 24px;
  font-weight: bold;
  ${(props) => props.theme.media.mobile} {
    font-size: 18px
  }
  ${props => props.$styles};
  
`;
const H4Style = styled.h4<{ $styles?: RuleSet<Object> }>`
  font-size: 20px;
  font-weight: bold;
  ${(props) => props.theme.media.mobile} {
    font-size: 18px
  }
  ${props => props.$styles};
`;

const H5Style = styled.h5<{ $styles?: RuleSet<Object> }>`
  font-size: 18px;
  font-weight: bold;
  ${props => props.$styles};
`;

const H6Style = styled.h6<{ $styles?: RuleSet<Object> }>`
  font-size: 16px;
  font-weight: bold;
  ${props => props.$styles};
`;


function HTag({
                index,
                $styles,
                content,
                fontStyle = RussoOneFont.className
              }: HTagComponentPropsInterface): React.JSX.Element {

  switch (index) {
    case 1 : {
      return (
        <H1Style $styles={$styles} className={fontStyle}>
          {content}
        </H1Style>
      )
    }
    case 2 : {
      return (
        <H2Style $styles={$styles} className={fontStyle}>
          {content}
        </H2Style>
      )
    }
    case 3 : {
      return (
        <H3Style $styles={$styles} className={fontStyle}>
          {content}
        </H3Style>
      )
    }
    case 4 : {
      return (
        <H4Style $styles={$styles} className={fontStyle}>
          {content}
        </H4Style>
      )
    }
    case 5 : {
      return (
        <H5Style $styles={$styles} className={fontStyle}>
          {content}
        </H5Style>
      )
    }
    case 6 : {
      return (
        <H6Style $styles={$styles} className={fontStyle}>
          {content}
        </H6Style>
      )
    }
    default : {
      return (
        <H1Style $styles={$styles} className={fontStyle}>
          {content}
        </H1Style>
      )
    }
  }
}

export default React.memo(HTag)
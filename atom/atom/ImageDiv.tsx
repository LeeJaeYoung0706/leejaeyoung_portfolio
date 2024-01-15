import styled, {RuleSet} from "styled-components";
import React from "react";
import Image from "next/image";

const ImageDivStyle = styled.div<{$style: RuleSet<Object>}>`
  ${(props) => props.$style};
`

function ImageDiv({alt , src , size ,  $divStyle, $style , fill} : ImageDivPropsInterface) {
  return (
    <ImageDivStyle $style={$divStyle}>
      <Image src={src} alt={alt} sizes={size} style={$style} fill={fill}/>
    </ImageDivStyle>
  )
}

export default React.memo(ImageDiv)
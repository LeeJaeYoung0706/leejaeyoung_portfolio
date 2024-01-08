'use client'
import React from "react";
import styled from "styled-components";


const ContainerLayoutStyle = styled.div`
  background-color: ${props => props.theme.palette.reverse};
  min-height: 100%;
  position: relative;
`

const ContainerView = ({children}: ContainerPropsInterface) => {
  return (
    <ContainerLayoutStyle>
      {children}
    </ContainerLayoutStyle>
  )
}

export default React.memo(ContainerView);
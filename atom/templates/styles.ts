import styled from "styled-components";


export const ContainerLayoutStyle = styled.div`
  background-color: ${props => props.theme.palette.reverse};
  height: 100vh;
  min-height: 100%;
`

export const MainViewLayoutStyle = styled.main`
  min-height: 100%;
  background-color: ${props => props.theme.palette.reverse};
  position: relative;
`
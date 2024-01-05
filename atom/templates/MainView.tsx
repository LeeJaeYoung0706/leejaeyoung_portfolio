import React from 'react';
import styled from "styled-components";


const MainViewLayout = styled.main`
  min-height: 100%;
  background-color: ${props => props.theme.palette.reverse};
  position: relative;
`

function MainView({children}: MainPropsInterface) {
  return (
    <MainViewLayout>
      {children}
    </MainViewLayout>
  )
}

export default React.memo(MainView)
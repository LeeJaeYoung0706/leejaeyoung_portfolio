import React from "react";
import styled from "styled-components";

const StackViewStyle = styled.section`
  background-color: ${props => props.theme.palette.reverse};
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    width: 70%;
    height: 100%;
    background-size: cover;
    background-image: url("/stack_background.png");
    background-attachment: fixed;
    background-position: 38%, 50%;
    opacity: 0.5;
    filter: grayscale(90%);
  }

  ${(props) => props.theme.media.tablet} {
    &:before {
      width: 100%;
    }

  }

  ${(props) => props.theme.media.mobile} {
    &:after {
      width: 100%;
    }
  }

`

const StackArticleLayout = styled.article`
  padding-bottom: 120px;
`

/**
 * 스택 부분 뷰
 * @param children
 * @constructor
 */
function StackView({children}: StackViewPropsInterface): React.JSX.Element {
  return (
    <StackViewStyle>
      <StackArticleLayout>
        {children}
      </StackArticleLayout>
    </StackViewStyle>
  )
}

export default React.memo(StackView)


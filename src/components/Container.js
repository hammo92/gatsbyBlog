import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
`
const Centered = styled.section`
  margin: 0 auto auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 3em 1.5em 2em;
  flex-grow: 1;
`
const Header = styled.h2`
  font-size:3em;
  font-weight:800;
  margin-bottom:40px;
  text-align:center;
`
const Container = props => {
  return (
  <Wrapper style={props.style}>
    <Centered>
      {props.header ? <Header>{props.header}</Header> : ''}
      {props.children}
    </Centered>
  </Wrapper>
)

}

export default Container

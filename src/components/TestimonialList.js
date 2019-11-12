import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  background:#f4f6f9;
  padding:20px 0;
`

const List = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin:auto;
  width: ${props => props.theme.sizes.maxWidth};
  grid-column-gap: 1em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr;
  }

`
const TestimonialList = props => {
  return (
    <Wrapper>
    <List>{props.children}</List>
    </Wrapper>
  )

}

export default TestimonialList

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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin:auto;
  width: ${props => props.theme.sizes.maxWidth};

`
const BrandList = props => {
  return (
    <Wrapper>
    <List>{props.children}</List>
    </Wrapper>
  )

}

export default BrandList

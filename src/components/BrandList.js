import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  background:#f4f6f9;
  padding:20px 0;
  & p {
    width:${props => props.theme.sizes.maxWidth};
    text-align:center;
    margin:20px auto 40px auto;
    font-size:1.6em;
    font-weight:600;
    color:#9499a4;
  }
`

const List = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin:auto;
  width: ${props => props.theme.sizes.maxWidth};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

`
const BrandList = props => {
  return (
    <Wrapper>
    <p>Join the great brands already working with RevolioHub:</p>
    <List>{props.children}</List>
    </Wrapper>
  )

}

export default BrandList

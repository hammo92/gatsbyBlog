import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  background:#101935;
  padding:20px 0;
  & h2 {
    margin:20px 0;
    font-size:2em;
    font-weight:600;
    color:#ffffff;
  }
`

const Content = styled.div`
  margin:auto;
  width: ${props => props.theme.sizes.maxWidth};
  text-align:center;

`

const Button = styled.button`
  background:#22a27b;
  border-radius:5px;
  color:#ffffff;
  font-size:1.5em;
  font-weight:600;
  padding:10px 20px;
  margin-bottom:20px;
  text-transform:capitalize;
`

const CtaBanner = props => {
  return (
    <Wrapper>
      <Content>
        <h2>{props.text}</h2>
        <Link to={`/${props.slug}/`}>
        <Button>{props.buttonText}</Button>
        </Link>
      </Content>
    </Wrapper>
  )

}

export default CtaBanner

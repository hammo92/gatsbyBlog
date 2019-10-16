import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  margin:0 auto 3em auto;
  width: 95%;
  background:#ffffff;
  height:100%;
  border-radius:5px;
  overflow:hidden;



`
const FeatImg = styled(Img)`
  width:100%

`
const ContentBlock = styled.div`
  padding:2em ;
  padding-top:2em;
  order:2;
  h2{
    font-size: 3em;
    text-transform: capitalize;
    font-weight: 800;
    margin-bottom:0.5em;
  }
  p{
    font-size: 1em;
    font-weight: 400;
  }
  h3{
    font-family: ff-market-web, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size:2em;
    margin-bottom:0.2em;
    color:#22a27b;
  }
`
const NumberBlock = styled.div`
    display:block
`
const NumberContent = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 3px solid #e5e5e5;
  border-radius: 20px;
  color: #777;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 31px;
  background-color: #fff;
  & :before{

    border-bottom: 1px solid #e5e5e5;
    top: 50%;
    position: absolute;
    z-index: -1;
    width: 100%;
  }

`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 0rem;
  line-height: 1.6;
`

const ServiceStep = ({
  title,
  description,
  order,
  image,
  ...props
}) => (
  <Wrapper>
    <ContentBlock>
      <h3>Step {order}</h3>
      <h2>{title}</h2>
      <p>{description}</p>
    </ContentBlock>
    <FeatImg fluid={image.fluid} backgroundColor={'#eeeeee'} />
  </Wrapper>
)

export default ServiceStep

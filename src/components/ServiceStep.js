import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
  display:flex;
  flex-direction:row;
  align-items: center;
  margin-bottom:3em;

`
const FeatImg = styled(Img)`
  width:50vw;

`
const ContentBlock = styled.div`
  width:50vw;
  padding-right:2em;
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
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 0rem;
  line-height: 1.6;
`

const FeatureBlock = ({
  title,
  featImage,
  content,
  subTitle
}) => (
  <Wrapper>
    <ContentBlock>
      <h3>{subTitle}</h3>
      <h2>{title}</h2>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: content.childMarkdownRemark.html,
        }}
      />
    </ContentBlock>
    <FeatImg fluid={featImage.fluid} backgroundColor={'#eeeeee'} />
  </Wrapper>
)

export default FeatureBlock

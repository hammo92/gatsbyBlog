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

const Desc = styled.div`
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
      <Desc
        dangerouslySetInnerHTML={{
          __html: content.childMarkdownRemark.html,
        }}
      />
    </ContentBlock>
    <FeatImg fluid={featImage.fluid} backgroundColor={'#eeeeee'} />
  </Wrapper>
)

export default FeatureBlock

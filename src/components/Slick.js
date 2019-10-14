import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Slider from "react-slick";

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

`

const Slide = styled.div`

`

const Content = styled.div`
  position: absolute;
  width:50%;
  height: 100%;
  left: 0;
  top: 0;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color:#ffffff;
  margin-left:10vw;
`

const Title = styled.h1`
  font-weight: 800;
  font-size:4em;
`

const ShortDesc = styled.p`
  font-size: 2em;
  font-weight: 400;
  margin-top:40px;

`


const HomeSlide = props => (
  <Wrapper>
    <Slider>
      <Slide>
        <BgImg
          height={props.height}
          fluid={props.image.fluid}
          backgroundColor={'#eeeeee'}
        />
        <Content>
          <Title>{props.title}</Title>
          <ShortDesc>{props.desc}</ShortDesc>
        </ Content>
      </ Slide>
    </Slider>
  </Wrapper>
)

export default HomeSlide

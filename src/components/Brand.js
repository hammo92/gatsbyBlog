import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Item = styled.figure`
  border-radius: 2px;
  width: 100%;
  opacity:0.8;
  transition: background 0.2s;
  &:hover {
    opacity: 1;
  }
  a {  }
`



const Brand = ({
  logo,
  brandName,
  slug,
  ...props
}) => {
  return (
    <Item>
      <Link to={`/${slug}/`}>
        <Img fluid={logo.fluid} backgroundColor={'#eeeeee'} />
      </Link>
    </Item>
  )
}

export default Brand

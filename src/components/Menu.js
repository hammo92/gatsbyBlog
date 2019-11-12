import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import config from '../utils/siteConfig'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    max-width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: flex;
    align-items:center;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
    img {
      width:200px;
      -webkit-filter: invert(1);
      filter: invert(1);
      @media screen and (max-width: ${props => props.theme.responsive.medium}) {
        width:100px;
      }
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }

`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              <img src={config.logoImage} />
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu

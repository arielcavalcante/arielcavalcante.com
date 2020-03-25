import React from "react"
import { nest } from "recompose"
import styled from "styled-components"
import Link from "gatsby-link"
import scrollToBottom from "../../lib/scroll-to-bottom"
import Wrap from "../wrap"
import theme from "../../theme"

const links = [
  { to: "/", label: "Home" },
  { to: "/cv", label: "Resume" }
]

const Wrapper = nest(
  styled.header`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: ${theme.headerHeight}rem;
    background-color: ${p =>
      p.showShadow ? theme.darkBGColor : "transparent"};
    color: ${theme.darkBGTextColor};
    user-select: none;
    font-family: ${theme.titleFont};
    box-shadow: ${p =>
      p.showShadow ? "0 0 .125rem 0 rgba(0,0,0,0.4)" : "unset"};
    transition: box-shadow 300ms ease-in, background-color 300ms ease-out;
    border-top: 0.25rem solid ${theme.baseColor};
    display: flex;
    flex-grow: 0;
    justify-content: space-between;
    li {
      display: block;
      a {
        text-decoration: none;
        text-transform: lowercase;
        transition: color 200ms ease-in-out;
        
        &.active {
          color: ${theme.baseColor};
        }
      }

  `,
  styled(Wrap)`
    margin: .5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    
    @media (max-width: ${theme.headerBreakpoint}rem) {
      
      height: 80%;
      justify-content: space-evenly;
      flex-direction: column;
      font-weight: 300;

      h1 {
        margin: 0;
        font-size: 1rem;
      }
    }
  `
)

const Logo = styled.h1`
  width: 21rem;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1;
`

const Menu = styled.nav`
  width: 13rem;
  max-width: 15rem;
  left: 0.25rem;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`

const renderLink = ({ label, to }) => (
  <li key={to}>
    <Link to={to} activeClassName="active">
      {label}
    </Link>
  </li>
)

const Header = ({ showShadow }) => (
  <Wrapper showShadow={showShadow}>
    <Logo>ariel cavalcante | product designer</Logo>
    <Menu>
      <ul>
        {links.map(renderLink).concat(
          <li key="contact">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={scrollToBottom}>
              Contact
            </a>
          </li>
        )}
      </ul>
    </Menu>
  </Wrapper>
)

export default Header

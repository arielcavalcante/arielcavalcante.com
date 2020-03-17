import React from "react"
import { nest } from "recompose"
import styled from "styled-components"
import Link from "gatsby-link"
import scrollToBottom from "../../lib/scroll-to-bottom"
import Wrap from "../wrap"
import theme from "../../theme"

const links = [
  { to: "/", label: "Home" },
  { to: "/cv/", label: "Resume" },
]

const Wrapper = nest(
  styled.header`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    height: ${theme.headerHeight}rem;
    background-color: ${p =>
      p.showShadow ? theme.darkBackgroundColor : "transparent"};
    color: ${theme.darkBackgroundTextColor};
    user-select: none;
    font-family: ${theme.titleFont};
    box-shadow: ${p =>
      p.showShadow ? "0 0 .125rem 0 rgba(0,0,0,0.4)" : "unset"};
    transition: box-shadow 300ms linear, background-color 300ms linear;
    border-top: 0.25rem solid ${theme.baseColor};
    width: 100%;
    display: flex;
    flex-grow: 0;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      display: block;
      a {
        text-decoration: none;
        text-transform: lowercase;
        transition: color 200ms linear;

        &.active {
          color: ${theme.baseColor};
        }
      }
    }
  `,
  styled(Wrap)`
    height: 100%;

    @media (min-width: ${theme.headerBreakpoint}rem) {
      display: flex;
      align-items: baseline;

      nav {
        padding-left: 7%;
      }

      h1 {
        padding-right: 7%;
      }
    }

    @media (max-width: ${theme.headerBreakpoint - .0625}rem) {
      padding: 0.75rem 0;
    }
  `
)

const Logo = styled.h1`
  display: block;
  white-space: nowrap;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1;
  margin: 0;

  @media (max-width: ${theme.headerBreakpoint - .0625}rem) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`

const Menu = styled.nav`
  left: 0.25rem;
  font-size: 1rem;

  ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      display: block;
      align-items: baseline;
    }

    li:not(:nth-of-type(even)) {
      margin-left: 2.5rem;
      padding: 0 0.75rem;
    }
  }

  @media (min-width: ${theme.headerBreakpoint}rem) {
    & ul,
    li {
      height: 100%;
    }
  }

  @media (max-width: ${theme.headerBreakpoint - .0625}rem) {
    li {
      margin-right: 0.625rem;
    }
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

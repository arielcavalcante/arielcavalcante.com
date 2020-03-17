import React from "react"
import { nest } from "recompose"
import styled from "styled-components"
import theme from "../../theme"
import Tool from "./tool"

const tools = [
  {
    link: "https://facebook.github.io/react",
    name: "React",
    logo: require("./react.svg"),
  },
  {
    link: "https://gatsbyjs.org",
    name: "GatsbyJS",
    logo: require("./gatsby.svg"),
  },
  {
    link: "https://www.netlify.com",
    name: "Netlify",
    logo: require("./netlify.svg"),
  },
]

const Wrapper = nest(
  styled.footer`
    text-align: center;
    font-size: 1rem;
    font-family: ${theme.titleFont};
    color: ${theme.baseColor};
    max-width: 85%;
    height: 100%;
    margin: auto;
    display: block;

    @media (max-width: 43.75rem) {
      margin-top: 2.5rem;
      margin-bottom: 8.5rem;
      justify-content: space-around;
      align-items: center;
    }

    @media (min-width: 43.75rem) {
      margin-top: 4rem;
      margin-bottom: 10rem;
    }

    a {
      font-weight: 500;
      text-decoration: none;
    }
  `
)

const Info = styled.div`
  margin-bottom: 1.15rem;
  font-weight: 300;

  &:not(:first-of-type) {
    margin-bottom: 3.5rem;
  }
`

const ToolList = styled.div`
  display: flex;
  margin-top: 1.5rem;

  & > * {
    margin: 0 1rem;

    &:first-child {
      margin-left: auto;
    }

    &:last-child {
      margin-right: auto;
    }
  }
`

const Love = styled.span`
  color: ${theme.secondaryColor};
  font-weight: 700;
  font-size: 0.875rem;
`

const love = <Love>♥</Love>

const authorLink = (
  <a
    href="https://twitter.com/aqueleariel"
    target="_blank"
    rel="noopener noreferrer"
  >
    Ariel Cavalcante
  </a>
)

const sourceLink = (
  <a
    href="https://github.com/arielcavalcante/arielcavalcante.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    here
  </a>
)

const renderTool = tool => <Tool key={tool.name} {...tool} />

const footer = () => (
  <Wrapper>
    <Info>Check my code {sourceLink}!</Info>
    <Info>
      Made with {love} by {authorLink} and powered by
    </Info>
    <ToolList>{tools.map(renderTool)}</ToolList>
  </Wrapper>
)

export default footer

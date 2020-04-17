import React from "react"
import { nest } from "recompose"
import styled from "styled-components"
import Wrap from "../wrap"
import theme from "../../theme"

const Wrapper = nest(
  styled.footer`
  font-family: ${theme.titleFont};
  text-align: center;
  color: ${theme.baseColor};
  background: ${theme.lightColor};
  display: block;
  position: relative;
  padding: 2rem;
  margin-bottom: 0;

    ul {
      width: 85%;
      max-width: 30rem;
      padding: 0;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
      margin: auto;
      
      li {
        width: fit-content;
        display: block;
        list-style: none;
        font-size: 1rem;
        
        &:first-child {
          margin-top: 0;
        }
        
        a {
          margin: 0;
          width: fit-content;
          display: flex;
          justify-content: center;
          align-item: center;
          font-width: 700;
          text-decoration: none;
          text-transform: lowercase;
        }
      }
    

    @media (max-width: 43.75rem) {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;

      li:not(:first-child) {
        margin-top: 1.5rem;
      }
    }
  `,
  Wrap
)

const Popover = styled.div`
  background-color: ${theme.secondaryColor};
  color: ${theme.lighterColor};
  font-size: 1.15rem;
  font-family: ${theme.titleFont};
  font-weight: 700;
  width: 18.75rem;
  border-radius: 0.375rem;
  padding: 1.15rem 0.6rem;
  box-shadow: 0 0 1rem rgb(10 10 0 / .25);
  display: block;
  position: absolute;
  left: calc(50% - 9.375rem);
  bottom: 13rem;
  pointer-events: none;

  @media (min-width: 43.75rem) {
    bottom: 3.5rem;
  }

  &:before {
    content: "";
    display: block;
    border-top: 0.75rem solid ${theme.secondaryColor};
    border-right: 0.75rem solid transparent;
    border-left: 0.75rem solid transparent;
    margin-left: -0.75rem;
    position: absolute;
    left: 50%;
    bottom: -0.75rem;
  }

  transition: all .5s cubic-bezier(0.1, 0.7, 0.3, 1);
  transform: translateY(${p => (p.showPopover ? "-2.5rem" : "-1.5rem")});
  opacity: ${p => (p.showPopover ? "1" : "0")};
`

// function preventDefault(e) {
//   e.preventDefault()
// }

const ExternalLink = ({ href, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {label}
  </a>
)

const Contact = ({ showPopover }) => (
  <Wrapper>
    <Popover showPopover={showPopover}>Get in touch!</Popover>
    <ul>
      <li>
        <ExternalLink
          href="https://github.com/arielcavalcante"
          label="GitHub"
        />
      </li>
      <li>
        <ExternalLink
          href="http://br.linkedin.com/in/arielcavalcante"
          label="LinkedIn"
        />
      </li>
      <li>
        <ExternalLink href="https://twitter.com/aqueleariel" label="twitter" />
      </li>
      {/*<li>
        <Link href="#" onClick={preventDefault}>
          +55 85 99918-8678
        </Link>
      </li>*/}
      <li>
        <a href="mailto:ariel.usabilidade@gmail.com">
          ariel.usabilidade@gmail.com
        </a>
      </li>
    </ul>
  </Wrapper>
)

export default Contact

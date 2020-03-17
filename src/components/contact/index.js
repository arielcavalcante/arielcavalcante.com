import React from "react"
import { nest } from "recompose"
import styled from "styled-components"
import Wrap from "../wrap"
import theme from "../../theme"

const Wrapper = nest(
  styled.footer`
  font-family: ${theme.titleFont};
  text-align: center;
  color: ${theme.titleColor};
  background: ${theme.secondaryColor};
  height: 100%;
  display: block;
  position: relative;
  padding: 3.75rem 0;
  margin-bottom: 0;

    ul {
      margin: 0;
      padding: 0;
    }
      

      li {
        list-style: none;
        font-size: 1rem;

        &:first-child {
           margin-top: 0;
        }
        
        a {
          text-decoration: none;
          text-transform: lowercase;
        }
      }
    }
    @media (max-width: 43.75rem) {
      height: 100%;

      ul {
        padding: 2rem 0;

        li {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 1rem;
  
          &:not(:first-child){
            padding-top: 1rem; 
        }
      }
    }

    @media (min-width: 43.75rem) {
      ul {
        display: flex;
        flex-direction: row;
        width: 75%;
        padding: 1.25rem 0;
      }
    }
  `,
  Wrap
)

const Popover = styled.div`
  background-color: ${theme.baseColor};
  color: #f9f;
  font-size: 1.15rem;
  font-family: "Poppins";
  font-weight: 700;
  width: 18.75rem;
  border-radius: 0.375rem;
  padding: 1.15rem 0.6rem;
  box-shadow: 0 0 1rem rgba(10, 10, 0, 0.25);
  display: block;
  position: absolute;
  left: calc(50% - 9.375rem);
  pointer-events: none;

  @media (max-width: 43.75rem) {
    bottom: 10.125rem;
  }
  @media (min-width: 43.75rem) {
    bottom: 2.125rem;
  }

  &:before {
    content: "";
    display: block;
    border-top: 0.75rem solid ${theme.baseColor};
    border-right: 0.75rem solid transparent;
    border-left: 0.75rem solid transparent;
    margin-left: -0.75rem;
    position: absolute;
    left: 50%;
    bottom: -0.75rem;
  }

  transition: all 500ms cubic-bezier(0.1, 0.7, 0.3, 1);
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
        <a href="#" onClick={preventDefault}>
          +55 85 99918-8678
        </a>
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

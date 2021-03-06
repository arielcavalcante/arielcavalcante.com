import React from "react"
import styled from "styled-components"

const Logo = styled.img`
  height: 1.3125rem;
  margin-bottom: .5625rem;
`

const Wrapper = styled.a.attrs({
  target: "_blank"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 0.8em;
  text-decoration: none;
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    transition: all .3s ease-in-out;
  }
`

const Tool = ({ name, logo: logoSrc, link }) => (
  <Wrapper href={link}>
    <Logo src={logoSrc} />
    <span>{name}</span>
  </Wrapper>
)

export default Tool

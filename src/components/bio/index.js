import React from "react"
import styled from "styled-components"
import BaseAvatar from "../avatar"
import theme from "../../theme"

const Avatar = styled(BaseAvatar)`
  width: 5.625rem;
  height: 5.625rem;

  @media (max-width: ${theme.breakpoint - .0625}rem) {
    align-self: center;
  }
`

const Emoji = ({ emoji, alt }) => (
  <span role="img" aria-label={alt}>
    {emoji}
  </span>
)

const Wrapper = styled.div`
  margin-top: 5rem !important;
  display: flex;
  align-items: center;
  flex-direction: row;

  strong {
    font-size: 1.1rem;
    font-family: ${theme.titleFont};
    color: ${theme.lightBackgroundColor};
  }

  p {
    padding-left: 1.25rem;
    margin: 0;
  }

  @media (max-width: ${theme.breakpoint - .0625}rem) {
    flex-direction: column;
    justify-content: center;

    p {
      padding-left: 0;
      margin-top: 1.875rem;
      text-align: center;
    }
  }
`

const Bio = () => (
  <Wrapper>
    <Avatar />
    <p>
      <strong>
        Meu blog pessoal <Emoji alt="emoji de coração preto" emoji="🖤" />
      </strong>
      <br />
      Coisas sobre a vida, os dramas e alegrias de um homem trans digital designer
    </p>
  </Wrapper>
)

export default Bio

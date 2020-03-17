import React from "react"
import styled from "styled-components"
import { nest } from "recompose"
import theme from "../../theme"
import Wrap from "../wrap"

const Wrapper = nest(
  styled.div`
    color: ${theme.lightBackgroundTextColor};
    padding-top: ${p => (p.main ? `${theme.headerHeight + 2.8125}rem` : "2.8125rem")};
    padding-bottom: 2.8125rem;
    font-family: ${theme.titleFont};
    position: relative;
    top: ${p => (p.main ? `-${theme.headerHeight}rem` : "0")};
    font-size: 1rem;

    @media (min-width: 80rem) {
      font-size: 1.25rem;
    }

    ${p =>
      p.backgroundImage &&
      `
      background-image: url(${p.backgroundImage});
      background-size: cover;
      background-position: center center;
      min-height: 40vw;
      display: flex;
      flex-direction: column;

      * {
        color: #d6d6d6 !important;
      }
    `};
  `,
  styled(Wrap)`
    ${p =>
      p.backgroundImage &&
      `
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
  `
)

const Hero = styled.div`
  font-size: 8.25rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: ${theme.highlightedTextColor};

  @media (max-width: 46.25rem) {
    font-size: 5rem;
  }
`

const Title = styled.div`
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: ${theme.highlightedTextColor};
`

const Subtitle = styled.div`
  font-size: 1.25rem;
  line-height: 1.4;

  @media (max-width: 46.25rem) {
    font-size: 1rem;
  }
`

const PageHeader = ({
  hero: heroText,
  title: titleText,
  subtitle: subtitleText,
  backgroundImage,
  main,
}) => (
  <Wrapper main={main} backgroundImage={backgroundImage}>
    {heroText && <Hero>{heroText}</Hero>}
    {titleText && <Title>{titleText}</Title>}
    {subtitleText && <Subtitle>{subtitleText}</Subtitle>}
  </Wrapper>
)

export default PageHeader

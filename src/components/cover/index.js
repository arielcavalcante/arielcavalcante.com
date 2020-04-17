import React from "react"
import styled from "styled-components"
import { nest } from "recompose"
import theme from "../../theme"
import Wrap from "../wrap"

const Wrapper = nest(
  styled.div`
    font-size: 1rem;
    background-color: ${theme.lightColor};
    font-family: ${theme.titleFont};
    padding-top: ${p => (p.main ? `${theme.headerHeight + 2.8125}rem` : "2.8125rem")};
    padding-bottom: 2.8125rem;
    position: relative;
    top: ${p => (p.main ? `-${theme.headerHeight}rem` : "0")};

    @media (min-width: 80rem) {
      font-size: 1.25rem;
    }

    ${p =>
      p.backgroundImage &&
      `
      background-image: url(${p.backgroundImage});
      background-size: cover;
      background-position: right center;
      min-height: 40vw;
      display: flex;
      flex-direction: column;

      * {
        color: ${theme.lightColor} !important;
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
  color: ${theme.textColor};

  @media (max-width: 46.25rem) {
    font-size: 5rem;
  }
`

const Title = styled.div`
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: ${theme.textColor};
  `
  
  const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.textColor};
`;

const Subtitle = styled.span`
  font-size: 1.25rem;
  line-height: 1.4;
  display: block;

  @media (max-width: 46.25rem) {
    font-size: 1rem;
  }
`

const PageHeader = ({
  hero: heroText,
  title: titleText,
  subtitle: subtitleText,
  secondSubtitle: secondSubtitleText,
  backgroundImage,
  main
}) => (
  <Wrapper main={main} backgroundImage={backgroundImage}>
    {heroText && <Hero>{heroText}</Hero>}
    {titleText && <Title>{titleText}</Title>}
    {subtitleText && <>
      <SubtitleWrapper>
        <Subtitle>{subtitleText}</Subtitle>
        <Subtitle>{secondSubtitleText}</Subtitle>
      </SubtitleWrapper>
    </>}
  </Wrapper>
)

export default PageHeader

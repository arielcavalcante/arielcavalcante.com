import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import Cover from "../components/cover"
import Content from "../components/content"
import BaseAvatar from "../components/avatar"
import Resume from "../components/resume"
import SEO from "../components/seo"
import theme from "../theme"

const Avatar = styled(BaseAvatar)`
  @media (max-width: ${theme.breakpoint - 1}px) {
    align-self: center;
  }
`

const Intro = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;
  @media (max-width: ${theme.breakpoint - 1}px) {
    flex-direction: column;
  }
`

const IntroText = styled.div`
  padding-right: 1.25rem;
  @media (max-width: ${theme.breakpoint - 1}px) {
    margin-top: 1.25rem;
    padding-right: 0;
  }
`

const IndexContent = () => (
  <>
    <SEO largeShareCard />
    <Cover
      main
      backgroundImage="/img/coverBackground.jpg"
      hero="Hey,"
      title="My name is Ariel"
      subtitle="Overwatch Tanker and Healer. Dog and cat person. Beyhive and Little Monster. Perfectly balanced. As all things should be."
    />
    <Content>
      <Intro>
        <Avatar />
        <IntroText>
          <p>
            I'm in tech industry for 5 years now, being a versatile product
            designer. I have worked prototyping with many tools (from 3D to
            paper), techniques, frameworks and analizing data colected either in
            field or in analytics through my career and I have been focusing on
            Javascript for the last year.
          </p>
          <p>
            I'm interested in User Interface opportunities Test Driven Design
            culture for each delivery. I can work with ease in most prototyping
            tools and I'm developing components, templates and React, which I've
            been working with since mid 2019.
          </p>
          <p>
            <span>
              You can know more about me checking my resumé below, browsing my{" "}
            </span>
            <a
              target="_blank"
              href="http://github.com/arielcavalcante"
              rel="noopener noreferrer"
            >
              github
            </a>
            <span>, taking a look at my </span>
            <Link to="/cv">resume</Link>
            <span> or even following me on </span>
            <a
              target="_blank"
              href="http://twitter.com/aqueleariel"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </p>
        </IntroText>
      </Intro>
    </Content>
    <Cover
      title="Resumé"
      subtitle={
        <div>
          <span>A brief history of what I've been up to</span>
          <br />
          <a href="/cv.pdf" target="_blank">
            Click here
          </a>
          <span> to download the full version on PDF</span>
        </div>
      }
    />
    <Content>
      <Resume />
    </Content>
  </>
)

export default IndexContent

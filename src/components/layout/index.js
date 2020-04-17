import React, { useEffect, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import performantEventListener from "../../lib/performant-event-listener"
import theme from "../../theme"
import Header from "../header"
import Footer from "../footer"
import Contact from "../contact"
import Body from "../body"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: auto;
    -webkit-font-smoothing: subpixel-antialiased;
    opacity: 0;
  }
  
  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${theme.textColor};
  font-family: ${theme.textFont};
  background-color: ${theme.lighterBGColor};
  transition: opacity 300ms linear;
  border-bottom: 0.5rem solid ${theme.baseColor};
  a {
    color: inherit;
    
    &:hover {
      color: ${theme.secondaryColor};
    }
  }

  p {
    line-height: 1.5;
    margin-bottom: 1.25rem;
  }
`

const Layout = ({ children, "*": page }) => {
  const [showHeaderShadow, setShowHeaderShadow] = useState(false)
  const [showContactPopover, setShowContactPopover] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      )

      const scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
      )

      setShowHeaderShadow(scrollTop > theme.headerHeight)
      setShowContactPopover(scrollTop > scrollHeight - window.innerHeight - 100)
    }

    onScroll()

    return performantEventListener(window, "scroll", onScroll)
  }, [])

  return (
    <>
      <GlobalStyle />
      {page === "cv" ? (
        <div id="body">{children}</div>
      ) : (
        <Wrapper id="body">
          <Header showShadow={showHeaderShadow} />
          <Body>{children}</Body>
          <Footer />
          <Contact showPopover={showContactPopover} />
        </Wrapper>
      )}
    </>
  )
}

export default Layout

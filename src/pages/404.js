import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Wrapper404 = styled.div.attrs({
  className: '__Wrapper404'
})`
  display: block;
  height: 20rem;
  margin-top: 5rem;
`

const NotFoundPage = () => (
  <Wrapper404>
    <h2>Page Not Found</h2>
    <p>These are not the droids you are looking for.</p>
    <Link to="/">Return to Home ➔</Link>
  </Wrapper404>
)

export default NotFoundPage
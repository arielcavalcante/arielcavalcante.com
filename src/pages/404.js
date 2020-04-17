import React from "react"
import Link from "gatsby-link"

const NotFoundPage = () => (
  <div style={{display: 'block', height: '20rem', marginTop: '5rem'}}>
    <h2>Page Not Found</h2>
    <p>These are not the droids you are looking for.</p>
    <Link to="/">Return to Home ➔</Link>
  </div>
)

export default NotFoundPage
import React from "react"
import Link from "gatsby-link"

//this inline style is shady as hell but was the only fix I could think of at the moment. sorry, future me.

const NotFoundPage = () => (
  <div>
    <h2>Page Not Found</h2>
    <p>These are not the droids you are looking for.</p>
    <Link to="/">Return to Home ➔</Link>
  </div>
)

export default NotFoundPage
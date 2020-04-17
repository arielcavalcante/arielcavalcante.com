import React from "react"
import webfontloader from "webfontloader"
import Layout from "./src/components/layout"
import CV from "./src/pages/cv"

export const wrapPageElement = ({ element, props }) => {
  if (props.path === "/cv/") {
    return element
  } else {
    return <Layout {...props}>{element}</Layout>
  }
}

export const onInitialClientRender = () => {
  webfontloader.load({
    active: () => {
      document.querySelector("body").style.opacity = 1
    },
    google: {
      families: ["Roboto", "Roboto Slab"],
    },
  })
}
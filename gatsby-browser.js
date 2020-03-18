import React from "react"
import webfontloader from "webfontloader"
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const onInitialClientRender = () => {
  webfontloader.load({
    active: () => {
      document.querySelector("#root").style.opacity = 1
    },
    google: {
      families: ["Poppins", "Noto Serif"]
    }
  })
}
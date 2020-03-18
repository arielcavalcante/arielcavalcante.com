import { nest } from "recompose"
import styled from "styled-components"
import theme from "../../theme"

const Avatar = nest(
  styled.a.attrs({
    href: "https://twitter.com/aqueleariel",
    target: "_blank",
  })`
    width: 11rem;
    height: 11rem;
    border-radius: 100%;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 .125rem .125rem rgb(30 75 75 / .3);
    
    &:hover {
      transition: all 0.5s ease-in-out;
      box-shadow: 0 .5rem 1rem rgb(30 75 75 / .25);
      transform: scale(1.01) translateY(-.0625rem);
    }
    
    &:active {
      transition: all 0.2s ease-in-out;
      transform: scale(0.95) translateY(0);
      box-shadow: inset 1rem 1rem .125rem rgb(0 0 0 / .3),
                  inset 1rem 1rem .125rem rgb(255 255 255 / .3);
      
    }
  `,
  styled.img.attrs({
    src: "/img/avatar.jpg",
    alt: "",
  })`
    width: 11rem;
    height: 11rem;
    border-radius: 100%;
    border: solid .25rem ${theme.baseColor};
    padding: .25rem;
    position: relative;
  `
)

export default Avatar
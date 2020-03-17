import { nest } from "recompose"
import styled from "styled-components"
import theme from "../../theme"

const Avatar = nest(
  styled.a.attrs({
    href: "https://twitter.com/aqueleariel",
    target: "_blank",
  })``,
  styled.img.attrs({
    src: "/img/avatar.jpg",
    alt: "",
  })`
    width: 10rem;
    height: 10rem;
    box-sizing: unset;
    border-radius: 100%;
    border: solid 1rem ${theme.baseColor};
    padding: 0.25rem;
    position: relative;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);

    &:hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.01);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
    }
  `
)

export default Avatar

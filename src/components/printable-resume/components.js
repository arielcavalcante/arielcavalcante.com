import styled, { createGlobalStyle } from "styled-components"
import theme from "../../theme"

const titleFont = theme.titleFont
const baseColor = theme.darkColor
const subtitleColor = theme.darkColor
const textColor = theme.textColor
const secondaryColor = theme.lightColor
const titleBreakpoint = "55rem";


export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1rem;
    font-family: "Roboto Slab";
    color: ${theme.textColor};
    background-color: ${theme.lighterColor};
    width: 85%;
  }
  `
  
  export const Wrapper = styled.div`
    width: 68.75rem;
    max-width: 100%;
    max-height: 100%;
    margin: 3.625rem;
  `

export const TagList = styled.ul`
  list-style: none;
  padding: 0 !important;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;

  li {
    flex-grow: 1;
    margin: .325rem;
    color: ${textColor};
    font-weight: 500;
    font-size: .875rem;
    text-align: center;
    height: 100%;
    line-height: 1;
    background-color: ${secondaryColor};
    padding: .25rem .5rem;
    border-radius: .125rem;
    border-color: ${baseColor}
    border-width: .25rem;
    display: block;
    -webkit-print-color-adjust: exact;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  white-space: nowrap;

  @media (max-width: ${titleBreakpoint} ) {
    flex-direction: column;
  }
`

export const HeaderTitle = styled.div`
  color: ${baseColor};
  font-family: ${titleFont};
  font-size: 2.75rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const HeaderSubtitle = styled.div`
  color: ${subtitleColor};
  font-weight: 300;
  font-size: 1.25rem;
  letter-spacing: .00625rem;
  padding-left: 0.125rem;
`

export const HeaderContacts = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  margin-left: auto;
  font-weight: 300;
  font-size: 1rem;
  margin-top: .75rem;
  
  
  @media (max-width: ${titleBreakpoint}) {
    flex-direction: row;
    margin-left: unset;
    margin-top: 2rem;
  }
  
  li {
    display: inline-block;
    padding: .125rem .25rem;
    margin-bottom: .25rem;
    text-align: right;
    
    & > svg {
      margin-right: .5rem;
    }
    
    & + li > svg {
      margin-right: .5rem;
    }

    a {
      font-family: 'Roboto Slab';
      font-width: 900;
      text-decoration: none;
    }
  }

  svg {
    height: 0.8rem;
    position: relative;
    top: .0625rem;
    opacity: 0.7;
  }
`

export const Separator = styled.div`
  border-top: .0625rem solid ${textColor};
  margin: 3rem 0 5rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  main {
    & > div:first-of-type {
      margin-bottom: 4rem;
    }
  }

  & > main li:first-child {
    margin-left: 0;
  }

  & > aside {
    flex-shrink: 0;

    @media (min-width: ${theme.headerBreakpoint}rem) {
      max-width: 13rem;
      margin-right: 2rem;
    }
  }

  @media (max-width: ${theme.headerBreakpoint}rem) {
    flex-direction: column;

    & > aside {
      width: 100%;
    }
  }
`

export const ContentSection = styled.div`
  margin-bottom: 2.25rem;

  &:first-of-type ul {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${theme.headerBreakpoint}rem) {
    &:first-of-type ul {
      flex-direction: row;
      flex-wrap: wrap;

      li {
        width: fit-content;
        margin: 0 2rem;
        display: block;
        white-space: nowrap;
        font-size: 1.125rem;
        margin: .5rem;
      }
    }

    &:nth-of-type(4) {
      margin: 0 0 5rem 0;
    }

    ul {
      list-style: none;
      padding: 0 !important;
    }
  }

  ul {
    padding: 0 0 0 1.25rem;
    margin: 0;
  }
`

export const ContentTitle = styled.div`
  color: ${baseColor};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`

export const Job = styled.div`
  margin-bottom: 2.1875rem;
  font-size: 0.875rem;
`

export const JobDetails = styled.div`
  color: ${subtitleColor};
  font-size: 0.875rem;
  font-weight: 700;
`

export const CompanyName = styled.div`
  font-size: 1rem;
  font-weight: 900;
`

export const JobDescription = styled.div`
  padding-top: 0.625rem;
  font-weight: 500;

  p {
    margin: 0 0 0.625rem 0;
  }
`

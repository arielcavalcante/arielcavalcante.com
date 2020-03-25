import styled, { createGlobalStyle } from "styled-components"
import theme from "../../theme"

const titleFont = theme.titleFont
const titleColor = theme.lightBGTextColor
const subtitleColor = theme.lightBGTextColor
const textColor = theme.textColor
const secondaryColor = theme.lightBGColor

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1rem;
    font-family: "Roboto Slab";
    color: ${theme.textColor};
    background-color: ${theme.lighterBGColor};
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
  margin: 0;
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
    border-color: ${titleColor}
    border-width: .25rem;
    display: block;
    -webkit-print-color-adjust: exact;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled.div`
  color: ${titleColor};
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
  list-style: none;
  margin: 0;
  margin-left: auto;
  display: block;
  font-weight: 300;
  font-size: 1rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.25rem;

    & + li > svg {
      margin-right: 0.5rem;
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
  margin: 1.25rem 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  & > main li:first-child {
    margin-left: 0;
  }

  & > aside {
    flex-shrink: 1;

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

  @media (max-width: ${theme.headerBreakpoint}rem) {
    &:nth-of-type(4n) {
      margin: 5rem 0;
    }
  }

  ul {
    padding: 0 0 0 1.25rem;
    margin: 0;
  }
`

export const ContentTitle = styled.div`
  color: ${titleColor};
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

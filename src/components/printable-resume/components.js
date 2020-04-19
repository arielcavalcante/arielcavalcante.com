import styled, { createGlobalStyle } from "styled-components"
import theme from "../../theme"

const textFont = theme.textFont
const titleFont = theme.titleFont
const baseColor = theme.darkColor
const subtitleColor = theme.darkColor
const textColor = theme.textColor
const secondaryColor = theme.lightColor
const titleBreakpoint = "55";


export const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    font-size: 1rem;
    font-family: ${textFont};
    color: ${theme.textColor};
    background-color: #fff;
  
    @media screen {
      background-color: ${theme.lighterColor};
    }
  }
`
  
export const Wrapper = styled.div`
  max-width: 69.375rem;
  padding: 1.25rem 3.125rem;
  margin: .625rem auto;
`

export const TagList = styled.ul`
  list-style: none;
  padding: 0 !important;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;

  @media screen (min-width: ${titleBreakpoint + .0625}rem) {
    margin-right: 2rem;
  }

  li {
    flex-grow: 1;
    margin: .3125rem;
    color: ${textColor};
    font-weight: 500;
    font-size: .875rem;
    text-align: center;
    height: 100%;
    line-height: 1;
    background-color: ${secondaryColor};
    padding: .25rem .5rem;
    border-radius: .25rem;
    display: block;
    -webkit-print-color-adjust: exact;
    
    @media screen (max-width: ${titleBreakpoint}rem) {
      margin: .3125rem;
      padding: .5rem .75rem;
    }
    
    @media print {
      background-color: transparent;
      border: solid .0625rem ${secondaryColor};
    }
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  white-space: nowrap;

  @media screen (max-width: ${titleBreakpoint}rem) {
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
  margin: .125rem 0;
`

export const HeaderContacts = styled.ul`
  font-size: 1rem;
  list-style: none;
  margin-left: auto;
  display: block;

  @media screen (max-width: ${titleBreakpoint}rem) {
    flex-direction: row;
    margin: 2rem auto 0;
  }
  
  li {
    display: inline-block;
    padding: .25rem;
    margin-bottom: .25rem;
    text-align: right;
    
    & > svg {
      margin-right: .5rem;
    }
    
    & + li > svg {
      margin-right: .5rem;
    }

    a {
      color: ${theme.linkColor};
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
  border-top: .0625rem solid ${baseColor};
  margin: 3rem 0 4rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  main {
    & > div:first-of-type {
      margin-bottom: 3rem;
    }
  }

  & > main li:first-child {
    margin-left: 0;
  }

  & > aside {
    margin-right: 2rem;
    flex-shrink: 0;
    min-width: 13rem;
    max-width: 15rem;
    
    @media screen (max-width: ${titleBreakpoint}rem) {
      flex-direction: column;
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
  
  @media screen (max-width: ${titleBreakpoint}rem) {
  margin-bottom: 3.5rem;

    &:first-of-type ul {
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;

      li {
        width: fit-content;
        margin: 0 2rem;
        display: block;
        white-space: nowrap;
        margin: .5rem;
      }
    }

    &:nth-of-type(4) {
      margin: 0 0 5rem 0;
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
  margin-top: 2.5rem;
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
  margin-bottom: .125rem;

  @media screen (max-width: ${titleBreakpoint}rem) {
    font-size: 1.125rem;
  }
`
  
export const JobDescription = styled.div`
  padding-top: 0.625rem;
  font-weight: 500;
  
  p {
    margin: 0 0 0.625rem 0;
  }

  @media screen (max-width: ${titleBreakpoint}rem) {
    font-weight: 500;
  }
`

import styled, { createGlobalStyle } from "styled-components"
import theme from "../../theme"

const titleFont = theme.titleFont
const titleColor = theme.titleColor
const subtitleColor = "#666"
const textColor = theme.textColor
const secondaryColor = theme.secondaryColor

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1rem;
    font-family: "Museo Sans";
    color: ${titleColor};
    background-color: #fff;
    width: 100%;
  }
`

export const Wrapper = styled.div`
  width: 85%;
  margin: 0.625rem auto;
`

export const TagList = styled.ul`
  list-style: none;
  padding: 0 !important;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  align-content: stretch;

  

  li {
    color: ${textColor};
    font-weight: 500;
    font-size: .875rem;
    text-align: center;
    height: 100%;
    line-height: 1;
    background-color: ${secondaryColor};
    padding: .25rem .5rem;
    border-radius: 4px;
    border-color: ${titleColor}
    border-width: .25rem;
    display: block;
    flex-grow: 1;
    -webkit-print-color-adjust: exact;
     margin: .325rem;

  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled.div`
  color: ${titleColor};
  font-family: ${titleFont};
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
`

export const HeaderSubtitle = styled.div`
  color: ${subtitleColor};
  font-weight: lighter;
  font-size: 1.25rem;
  letter-spacing: 0.1px;
  padding-left: 0.125rem;
`

export const HeaderContacts = styled.ul`
  list-style: none;
  margin: 0;
  margin-left: auto;
  display: block;
  white-space: nowrap;
  font-weight: lighter;
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
    top: 1px;
    opacity: 0.7;
  }
`

export const Separator = styled.div`
  border-top: 1px solid ${textColor};
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

    @media (min-width: ${theme.headerBreakpoint}px) {
      max-width: 13rem;
      margin-right: 2rem;
    }
  }

  @media (max-width: ${theme.headerBreakpoint}px) {
    flex-direction: column;

    & > aside {
      width: 100%;
    }
  }
`

export const ContentSection = styled.div`
  margin-bottom: 2.25rem;

  @media (max-width: ${theme.headerBreakpoint}px) {
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
  font-weight: bolder;
  font-size: 1.15rem;
  margin-bottom: 1rem;
`

export const Job = styled.div`
  margin-bottom: 2.25rem;
  font-size: 0.875rem;
`

export const JobDetails = styled.div`
  color: ${subtitleColor};
  font-weight: lighter;
  font-weight: 0.875rem;
`

export const CompanyName = styled.div`
  font-size: 1rem;
  font-weight: bolder;
`

export const JobDescription = styled.div`
  padding-top: 0.6rem;

  p {
    margin: 0 0 0.6rem 0;
  }
`

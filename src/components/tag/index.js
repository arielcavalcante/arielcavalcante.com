import styled from "styled-components"
import theme from "../../theme"

const branch = (prop, left, right) => props => (props[prop] ? left : right)

const Tag = styled.div`
  display: inline-block;
  padding: ${branch("small", ".25rem .4375rem", ".375rem .8125rem")};
  font-size: .8125rem;
  color: ${branch("inverse", theme.lightColor, theme.baseColor)};
  background: ${branch("inverse", theme.baseColor, "transparent")};
  border: .0625rem solid ${theme.baseColor};
  border-radius: .25rem;
  font-family: ${theme.titleFont};
  margin: .325rem;
  flex-grow: 1;
  font-weight: ${branch("inverse", "bold", "normal")};
  text-align: center;
`

export default Tag

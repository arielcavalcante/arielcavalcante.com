import styled from "styled-components"
import theme from "../../theme"

const branch = (prop, left, right) => props => (props[prop] ? left : right)

const Tag = styled.div`
  display: inline-block;
  padding: ${branch("small", ".25rem .425rem", ".375rem .8125rem")};
  font-size: .75rem;
  color: ${branch("inverse", "#fff", theme.baseColor)};
  background: ${branch("inverse", theme.baseColor, "transparent")};
  border: .0625rem solid ${theme.baseColor};
  border-radius: .25rem;
  font-family: ${theme.titleFont};
  margin: 0 .375rem .5rem 0;
  font-weight: ${branch("inverse", "bold", "normal")};
`

export default Tag

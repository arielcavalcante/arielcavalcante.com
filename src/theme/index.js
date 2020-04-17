export default {
  breakpoint: 38.125,
  headerHeight: 4,
  headerBreakpoint: 44.375,
  blogMaxWidth: 40.625,

  baseColor: "#34A7B2",
  secondaryColor: "#F59AA3",

  titleFont: "Roboto Slab, serif",
  textFont: "Roboto, sans-serif",

  lighterColor: "#FFFBF2",
  lightColor: "#FCECCC",
  darkColor: "#5B2E35",
  
  get textColor() {return this.darkColor},
  get linkColor() {return this.baseColor},
  get linkHoverColor() {return this.secondaryColor},
}
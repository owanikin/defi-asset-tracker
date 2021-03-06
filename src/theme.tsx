import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  mono: `'Menlo', Monaco, Fira Code, Ubuntu Mono, monospace`,
  heading: `"Space Grotesk Medium", Cantarell, Oxygen, Ubuntu, sans-serif`,
  body: `"DeFina", Segoe UI, Oxygen, Ubuntu, Roboto, Fira Sans, Helvetica Neue, sans-serif`,
}
const fontSizes = {
  xs: '0.65rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem',
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    blue: {
      50: '#e5ebff',
      100: '#b5c2fa',
      200: '#859af8',
      300: '#5572f7',
      400: '#2e4af6',
      500: '#1e31de',
      600: '#1627ac',
      700: '#0e1b7a',
      800: '#051149',
      900: '#00051a',
    },
  },
  fonts,
  fontSizes,
  breakpoints,
})

/* A bunch of design constants */
export const styleConstants = {
  defaultBox: '1rem',
  defaultWrapper: '.5rem 1.1rem',
  formBorderRadius: '6px',
  defaultRadius: '4px',
  defaultShadow: '6px 1px 18px #44866b1a',
  defaultBorder: '1px solid #1e31de',
  headerHeight: '60px',
  buttonHeight: '48px',
  fixedMarginTop: '7rem',
  fixedMarginTopSmall: '4rem',
  paddingWrapper: '.5rem 2rem',
  altBorder: '1px solid #e5ebff',
  thickBorder: '1px solid #0e1b7a',
  altBackground: 'rgb(247, 248, 250)',
  background:
    'rgba(0, 0, 0, 0) radial-gradient(50% 50%, rgba(252, 7, 125, 0.023) 0%, rgba(255, 255, 255, 0) 100%) repeat scroll 0% 0%',
  inputMinHeight: '48px',
  inputFontSize: '16px',
  inputPlaceHolder: '14px',
  topZindex: '99910',
  tableBorder: '1px solid rgba(77, 77, 77, 0.089)',
  lightShadow: '6px 5px 10px rgba(0,50,30,0.03)',
  blue: '#0e1b7a',
  main: 'blue.800',
}

export default theme

// position: fixed;
// top: 0px;
// left: calc(-50vw);
// right: 0px;
// pointer-events: none;
// width: 200vw;
// height: 200vh;
// mix-blend-mode: color;
// background: rgba(0, 0, 0, 0) radial-gradient(50% 50%, rgba(252, 7, 125, 0.063) 0%, rgba(255, 255, 255, 0) 100%) repeat scroll 0% 0%;
// transform: translateY(-100vh);
// will-change: background;
// transition: background 450ms ease 0s;
// }

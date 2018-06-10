import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

import LOGOMARK from './logomark.svg'
import REACT_LOGO from './react.svg'
import BANGKOK_LOGO from './bangkok.svg'
import BACKGROUND from './evan-krause-443485-unsplash-1980w.jpg'

export { LOGOMARK, REACT_LOGO, BANGKOK_LOGO, BACKGROUND }

/**
 * Usable fonts in this website.
 */
export const Fonts = {
  display: ['Metropolis', 'Proxima Nova', 'Montserrat', ...getSystemFonts()].join(', '),
  body: ['Noto Sans', 'Noto Sans Thai UI', ...getSystemFonts()].join(', '),
}

/**
 * Usable colors in this website.
 */
export const Colors = {
  white: 'white',
  black: 'black',
  grey900: '#222',
  grey800: '#333',
  grey700: '#444',
  reactBlue: '#00d8ff',
}

/**
 * Breakpoints for responsive design.
 */
export const MediaQueries = {
  /** Horizontal mobile phone and above. */
  sm: '@media (min-width: 576px)',
  /** Tablet and above. */
  md: '@media (min-width: 768px)',
  /** Landscape tablet and above. */
  lg: '@media (min-width: 992px)',
  /** Desktop and above. */
  xl: '@media (min-width: 1200px)',
}

/**
 * The base font size for mobile phones.
 */
const BASE_FONT_SIZE_XS = '16px'

/**
 * The base font size for tablets and above.
 */
const BASE_FONT_SIZE_MD = '20px'

/**
 * Convert a "beat" to a CSS size unit. Used to establish a
 * [vertical rhythm](https://zellwk.com/blog/why-vertical-rhythms/).
 * @param {number} beats Number of beats
 */
export function beat (beats) {
  return `${beats * 1.52}rem`
}

/**
 * Computes the absolute font size for
 * [typographic scale](http://spencermortensen.com/articles/typographic-scale/).
 *
 * We use [7 tone equal temperament](https://en.wikipedia.org/wiki/Equal_temperament#5_and_7_tone_temperaments_in_ethnomusicology)
 * which is the [tuning of Thai traditional instruments](https://en.wikipedia.org/wiki/Ranat_ek#Tuning).
 *
 * @param {number} n The font size, where
 *
 *   - `-14` = 0.25x normal font size.
 *   - `-7` = 0.5x normal font size.
 *   - `0` = normal font size.
 *   - `7` = 2x normal font size.
 *   - `14` = 4x normal font size.
 */
export function fontSize (n) {
  return `${(2 ** (n / 7)).toFixed(3)}rem`
}

/**
 * Tracking (letter-spacing).
 */
export const Tracking = {
  tight: '-0.05em',
  normal: '0',
  wide: '0.05em',
}

/**
 * The layout component. Should be used on each page.
 */
export class Layout extends React.Component {
  render () {
    return <TypographicContext>{this.props.children}</TypographicContext>
  }
}

/**
 * Establishes a typographic context by:
 *
 * - resetting font size
 * - resetting line height
 * - setting appropriate margins for direct children
 */
export const TypographicContext = styled.div({
  fontSize: '1rem',
  lineHeight: beat(1),
  '> p, > blockquote, > ul, > ol, > dl, > table, > pre': {
    marginTop: beat(1),
    marginBottom: 0,
    '&:first-child': {
      marginTop: 0,
    },
  },
})

function injectGlobalStyles () {
  function fontFace (src, family, weight) {
    return `@font-face {
      font-family: "${family}";
      font-weight: ${weight};
      src: url(${src}) format('woff2');
    }`
  }

  injectGlobal`
    ${fontFace(require('./vendor/fonts/Metropolis-Light.woff2'), 'Metropolis', 300)}
    ${fontFace(require('./vendor/fonts/Metropolis-Regular.woff2'), 'Metropolis', 400)}
    ${fontFace(require('./vendor/fonts/Metropolis-Medium.woff2'), 'Metropolis', 500)}
    ${fontFace(require('./vendor/fonts/Metropolis-SemiBold.woff2'), 'Metropolis', 600)}
    ${fontFace(require('./vendor/fonts/Metropolis-Bold.woff2'), 'Metropolis', 700)}
    ${fontFace(require('./vendor/fonts/NotoSans-Light-Latin.woff2'), 'Noto Sans', 300)}
    ${fontFace(require('./vendor/fonts/NotoSans-SemiBold-Latin.woff2'), 'Noto Sans', 600)}
    ${fontFace(require('./vendor/fonts/NotoSansThaiUI-Light.woff2'), 'Noto Sans Thai UI', 300)}
    ${fontFace(require('./vendor/fonts/NotoSansThaiUI-SemiBold.woff2'), 'Noto Sans Thai UI', 600)}
  `

  injectGlobal({
    'html, body': {
      fontFamily: Fonts.body,
      fontWeight: 300,
      fontSize: BASE_FONT_SIZE_XS,
      color: Colors.white,
      margin: 0,
      padding: 0,
      background: Colors.grey800,
      [MediaQueries.md]: {
        fontSize: BASE_FONT_SIZE_MD,
      },
    },
    a: {
      textDecoration: 'none',
      color: Colors.white,
    },
    'button, input, textarea': {
      fontFamily: 'inherit',
    },
  })
}

function getSystemFonts () {
  return [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ]
}

injectGlobalStyles()

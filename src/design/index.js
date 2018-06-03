import React from 'react'
import { injectGlobal } from 'emotion'

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
  greyDark: '#222',
  reactBlue: '#00d8ff',
}

/**
 * Convert a "beat" to a CSS size unit. Used to establish a
 * [vertical rhythm](https://zellwk.com/blog/why-vertical-rhythms/).
 * @param {number} beats Number of beats
 */
export function beat (beats) {
  return `${beats * 24}px`
}

/**
 * The layout component. Should be used on each page.
 */
export class Layout extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.children}
        <footer
          css={{
            padding: `${beat(1)} 0`,
            textAlign: 'center',
            opacity: 0.5,
          }}
        >
          React Bangkok 3.0.0
        </footer>
      </React.Fragment>
    )
  }
}

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
    ${fontFace(require('./vendor/fonts/NotoSansThaiUI-Light.woff2'), 'Noto Sans Thai UI', 300)}
  `

  injectGlobal({
    'html, body': {
      fontFamily: Fonts.body,
      fontWeight: 300,
      fontSize: '1rem',
      color: Colors.white,
      margin: 0,
      padding: 0,
      background: Colors.greyDark,
    },
    a: {
      textDecoration: 'none',
      color: Colors.reactBlue,
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

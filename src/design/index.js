import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

/* global tw */

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
  'html, body': tw('font-sans font-light text-base text-white m-0 p-0 bg-black'),
  a: tw('no-underline text-react-blue'),
})

export class Layout extends React.Component {
  render () {
    return (
      <div>
        <Content>{this.props.children}</Content>
        <Footer>React Bangkok 3.0.0</Footer>
      </div>
    )
  }
}

const Content = styled.div(tw('p-4'))
const Footer = styled.footer(tw('py-4 text-center opacity-50'))

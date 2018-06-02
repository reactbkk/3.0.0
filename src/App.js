import React from 'react'
import { Router, Head } from 'react-static'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import favicon from './favicon.png'

function fontFace (src, family, weight) {
  return `@font-face {
    font-family: "${family}";
    font-weight: ${weight};
    src: url(${src}) format('woff2');
  }`
}
injectGlobal`
  ${fontFace(require('./vendor/fonts/Metropolis-Thin.woff2'), 'Metropolis', 200)}
  ${fontFace(require('./vendor/fonts/Metropolis-Light.woff2'), 'Metropolis', 300)}
  ${fontFace(require('./vendor/fonts/Metropolis-Regular.woff2'), 'Metropolis', 400)}
  ${fontFace(require('./vendor/fonts/Metropolis-Medium.woff2'), 'Metropolis', 500)}
  ${fontFace(require('./vendor/fonts/Metropolis-SemiBold.woff2'), 'Metropolis', 600)}
  ${fontFace(require('./vendor/fonts/Metropolis-Bold.woff2'), 'Metropolis', 700)}
  ${fontFace(require('./vendor/fonts/Metropolis-ExtraBold.woff2'), 'Metropolis', 800)}
  ${fontFace(require('./vendor/fonts/Metropolis-Black.woff2'), 'Metropolis', 900)}
`

injectGlobal({
  'html, body': tw('font-sans font-light text-base text-white m-0 p-0 bg-black'),
  a: tw('no-underline text-react-blue'),
})

const Content = styled.div(tw('p-4'))
const App = () => (
  <Router>
    <div>
      <Head>
        <title>React Bangkok 3.0.0</title>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Head>
      <Content>
        <Routes />
      </Content>
      <Footer>React Bangkok 3.0.0</Footer>
    </div>
  </Router>
)

const Footer = styled.footer(tw('py-4 text-center opacity-50'))

export default hot(module)(App)

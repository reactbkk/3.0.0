import React from 'react'
import { Router, Head } from 'react-static'
import { css, injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import favicon from './favicon.png'

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

import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import { HomePage } from '../home'
import { Layout } from '../design'

export default () => (
  <ParallaxProvider>
    <Layout>
      <HomePage />
    </Layout>
  </ParallaxProvider>
)

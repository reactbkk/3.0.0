import React from 'react'

import {
  Colors,
} from '../design'
import { Section } from './Section'
import { ParallaxElement } from './ParallaxElement'

export class InfoSection extends React.Component {
  render () {
    return (
      <Section cssExtension={{ minHeight: '20vh', height: '20vh' }}>
        <ParallaxElement z={1}>
          <div css={{
            width: '120vw',
            height: '80vh',
            backgroundColor: Colors.white,
            transform: 'rotate(-5deg)',
          }} />
        </ParallaxElement>
      </Section>
    )
  }
}

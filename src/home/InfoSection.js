import React from 'react'

import { Colors } from '../design'
import { Section } from './Section'
import { ParallaxElement } from './ParallaxElement'

export class InfoSection extends React.Component {
  render () {
    return (
      <Section cssExtension={{ minHeight: '10vh', height: '10vh' }}>
        <ParallaxElement z={2}>
          <div css={{
            width: '120vw',
            height: '90vh',
            backgroundColor: Colors.brightest,
            transform: 'rotate(-5deg)',
          }} />
        </ParallaxElement>
      </Section>
    )
  }
}

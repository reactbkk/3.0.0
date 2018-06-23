import React from 'react'

import { Colors } from '../design'
import { Section } from './Section'
import { SponsorsSectionContent } from './SponsorsSectionContent'

export class SponsorsSection extends React.Component {
  render () {
    return (
      <Section title="Sponsors" cssExtension={{ background: Colors.darkest }}>
        <SponsorsSectionContent />
      </Section>
    )
  }
}

import React from 'react'
import { Section } from './Section'
import { SponsorsSectionContent } from './SponsorsSectionContent'

export class SponsorsSection extends React.Component {
  render () {
    return (
      <Section title="Sponsors" cssExtension={{ background: 'black' }}>
        <SponsorsSectionContent />
      </Section>
    )
  }
}

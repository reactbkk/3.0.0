import _ from 'lodash'
import React from 'react'

import { SPEAKERS } from './SpeakersData'
import { Section } from './Section'
import { beat, Colors, ViewType } from '../design'

export class SpeakersSection extends React.Component {
  renderSpeaker = speaker => (
    <div
      key={speaker.name}
      css={{
        width: beat(7),
        height: beat(7),
        background: `
          url(${speaker.photo}) no-repeat center,
          ${Colors.dark}
        `,
        backgroundSize: 'cover',
        backgroundBlendMode: 'luminosity',
        [ViewType.mobile]: {
          width: '33.33vw',
          height: '33.33vw',
        },
      }}
    />
  )

  render () {
    return (
      <Section
        cssExtension={{
          margin: 'auto',
          maxWidth: beat(42),
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'center',
          [ViewType.tablet]: {
            padding: beat(0.5),
          },
          [ViewType.mobile]: {
            padding: 0,
          },
        }}
      >
        {_.values(SPEAKERS).map(this.renderSpeaker)}
      </Section>
    )
  }
}

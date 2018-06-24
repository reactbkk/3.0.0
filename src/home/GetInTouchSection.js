import React from 'react'

import { beat, Colors, Fonts, fontSize, Tracking } from '../design'
import { Section } from './Section'
import { ActionButton } from './ActionButton'

export class GetInTouchSection extends React.Component {
  render () {
    return (
      <Section
        cssExtension={{
          minHeight: 'auto',
          background: 'black',
          boxShadow: `0 0 ${beat(10)} 0 rgba(153, 235, 253, 0.5)`,
        }}
      >
        <p
          css={{
            paddingBottom: beat(1),
            fontSize: fontSize(-2),
            textAlign: 'center',
            letterSpacing: Tracking.wide,
          }}
        >
          Interested in sponsoring our future events?
        </p>
        <ActionButton
          href="https://airtable.com/shrHLwwtY80z3LvuR"
          target="_blank"
          cssExtension={{
            padding: beat(0.5),
            fontFamily: Fonts.display,
            fontWeight: 600,
            fontSize: fontSize(-2),
            textTransform: 'uppercase',
          }}
        >
          Get in Touch!
        </ActionButton>
      </Section>
    )
  }
}

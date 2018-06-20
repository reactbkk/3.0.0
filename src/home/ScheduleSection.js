import _ from 'lodash'
import React from 'react'
import { beat } from '../design'

import { Section } from './Section'
import { SCHEDULE_DATA } from './ScheduleData'

export class ScheduleSection extends React.Component {
  render () {
    return (
      <Section title="Schedule" cssExtension={{
        background: 'black',
        color: 'white',
      }}
      >
        {_.map(SCHEDULE_DATA, ({ title, speakers }) => (
          <div key={title} css={{
            width: beat(20),
            padding: beat(1),
            borderBottom: 'solid 1px white',
          }}>
            <h4>
              {title}
            </h4>
            {_.map(speakers, speaker => (
              <span key={speaker.name}>{speaker.name}</span>
            ))}
          </div>
        ))}
      </Section>
    )
  }
}

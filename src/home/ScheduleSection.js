import _ from 'lodash'
import React from 'react'
import { beat, Colors, Fonts, fontSize, Tracking } from '../design'

import { Section } from './Section'
import { SCHEDULE_DATA } from './ScheduleData'
import { images } from '../sparkles-effect'

export class ScheduleSection extends React.Component {
  renderTimeline = ({ pinAtCenter } = {}) => (
    <div css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: pinAtCenter ? 'center' : 'flex-start',
      width: 1,
      margin: `0 ${beat(1)}`,
      background: Colors.brightest,
      flex: '0 0 auto',
    }}>
      <img width={15} src={images[2]} alt="pin" />
    </div>
  )

  renderPeriod = (index, {
    key, startTime, content, pinAtCenter,
  }) => (
    <div key={`${index}_${key}`} css={{
      width: '100%',
      display: 'flex',
      flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
    }}>
      <div css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
        flex: '1 1 auto',
        flexBasis: '33%',
        fontFamily: Fonts.display,
        fontSize: fontSize(-3),
      }}>
        {startTime ? startTime.toLocaleString() : ''}
      </div>
      {this.renderTimeline({ pinAtCenter })}
      <div css={{
        padding: `${beat(0.25)} 0`,
        display: 'flex',
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
        flex: '1 1 auto',
        flexBasis: '33%',
        textAlign: index % 2 === 0 ? 'left' : 'right',
        overflow: 'hidden',
      }}>
        {content}
      </div>
    </div>
  )

  renderFundamental = (index, { title, sponsor, startTime }) => this.renderPeriod(index, {
    key: `${title}${sponsor ? `_by_${sponsor.name}` : ''}`,
    content: [
      <div key="title" css={{
        flex: '1 1 auto',
        alignSelf: 'flex-start',
        padding: `${beat(0.1)} ${beat(0.5)}`,
        maxWidth: beat(12),
        backgroundColor: Colors.reactComplementary,
        fontSize: fontSize(-2),
        fontWeight: 600,
        letterSpacing: Tracking.wide,
        textTransform: 'uppercase',
      }}>
        {title}
      </div>,
    ],
    startTime,
    pinAtCenter: true,
  })

  renderSpeakerPhoto = photo => (
    <div
      key="photo"
      css={{
        width: beat(3),
        height: beat(3),
        margin: `0 ${beat(1)}`,
        flexShrink: 0,
        background: `
          url(${photo}) no-repeat center,
          ${Colors.dark}
        `,
        backgroundSize: 'cover',
        backgroundBlendMode: 'luminosity',
      }}
    />
  )

  renderSession = (index, {
    title, description, speaker, startTime,
  }) => this.renderPeriod(index, {
    key: `${title}_by_${speaker.name}`,
    content: [
      this.renderSpeakerPhoto(speaker.photo),
      <div key="info" css={{
        maxWidth: beat(12),
      }}>
        <span css={{ fontSize: fontSize(0), fontWeight: 600 }}>{title}</span>
        <br />
        <span css={{ fontSize: fontSize(-2), color: Colors.grey100 }}>by {speaker.name}</span>
        <br />
        <div css={{
          marginTop: beat(0.25),
          fontSize: fontSize(-4),
          color: Colors.grey200,
        }}>
          {description}
        </div>
      </div>,
    ],
    startTime,
  })

  render () {
    return (
      <Section>
        {_.map(SCHEDULE_DATA, (data, index) => {
          switch (data.type) {
            case 'fund': return this.renderFundamental(index, data)
            case 'session': return this.renderSession(index, data)
            // case 'sponsorSession': return this.renderSponsorSession()
            default: return null
          }
        })}
      </Section>
    )
  }
}

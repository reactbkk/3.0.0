import _ from 'lodash'
import React from 'react'
import { beat, Colors, Fonts, fontSize, Tracking, PLUS } from '../design'

import { Section } from './Section'
import { SCHEDULE_DATA } from './ScheduleData'

export class ScheduleSection extends React.Component {
  renderTimeline = ({ pinAtCenter } = {}) => (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: pinAtCenter ? 'center' : 'flex-start',
        width: 1,
        margin: `0 ${beat(1)}`,
        background: Colors.brightest,
        flex: '0 0 auto',
      }}
    >
      <img width={15} src={PLUS} alt="pin" />
    </div>
  )

  renderTime = ({ startTime, pullRight }) => (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: pullRight ? 'flex-start' : 'flex-end',
        flex: '1 1 auto',
        flexBasis: '33%',
        fontFamily: Fonts.display,
        fontSize: fontSize(-3),
      }}
    >
      {startTime ? startTime.toLocaleString() : ''}
    </div>
  )

  renderContent = ({ content, pullRight }) => (
    <div
      css={{
        padding: `${beat(0.25)} 0`,
        display: 'flex',
        flexDirection: pullRight ? 'row-reverse' : 'row',
        flex: '1 1 auto',
        flexBasis: '33%',
        textAlign: pullRight ? 'right' : 'left',
        overflow: 'hidden',
      }}
    >
      {content}
    </div>
  )

  renderPeriod = ({
    key, startTime, content, pinAtCenter, pullRight,
  }) => (
    <div
      key={key}
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: pullRight ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
      }}
    >
      {this.renderTime({ startTime, pullRight })}
      {this.renderTimeline({ pinAtCenter })}
      {this.renderContent({ content, pullRight })}
    </div>
  )

  renderPoweredBy = sponsor =>
    sponsor ? <div key={`powered_by_${sponsor.name}`}>Powered by {sponsor.name}</div> : null

  renderFundamental = (index, { title, sponsor, startTime }) =>
    this.renderPeriod({
      key: `${index}_${title}${sponsor ? `_by_${sponsor.name}` : ''}`,
      content: [
        <div
          key="title"
          css={{
            flex: '1 1 auto',
            alignSelf: 'flex-start',
            padding: `${beat(0.1)} ${beat(0.5)}`,
            maxWidth: beat(12),
            backgroundColor: Colors.reactComplementary,
            fontSize: fontSize(-2),
            fontWeight: 600,
            letterSpacing: Tracking.wide,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </div>,
        this.renderPoweredBy(sponsor),
      ],
      startTime,
      pinAtCenter: true,
      pullRight: index % 2 === 1,
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
  }) =>
    this.renderPeriod({
      key: `${index}_${title}_by_${speaker.name}`,
      content: [
        this.renderSpeakerPhoto(speaker.photo),
        <div
          key="info"
          css={{
            maxWidth: beat(12),
          }}
        >
          <span css={{ fontSize: fontSize(0), fontWeight: 600 }}>{title}</span>
          <br />
          <span css={{ fontSize: fontSize(-2), color: Colors.react }}>by {speaker.name}</span>
          <br />
          <div
            css={{
              marginTop: beat(0.25),
              fontSize: fontSize(-4),
              color: Colors.bright,
            }}
          >
            {description}
          </div>
        </div>,
      ],
      startTime,
      pullRight: index % 2 === 1,
    })

  render () {
    return (
      <Section>
        {_.map(SCHEDULE_DATA, (data, index) => {
          switch (data.type) {
            case 'fund':
              return this.renderFundamental(index, data)
            case 'session':
              return this.renderSession(index, data)
            default:
              return null
          }
        })}
      </Section>
    )
  }
}

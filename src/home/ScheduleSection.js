import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { beat, Colors, Fonts, fontSize, Tracking, ViewType, PLUS } from '../design'

import { Section } from './Section'
import { SCHEDULE_DATA } from './ScheduleData'
import { DESKTOP, TABLET, MOBILE } from './withViewType'

const HEADER_SIZE = 1
export class ScheduleSection extends React.Component {
  static propTypes = {
    viewType: PropTypes.string,
  }

  renderTimeline = () => (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 1,
        margin: `0 ${beat(1)}`,
        background: Colors.brightest,
        flex: '0 0 auto',
        [ViewType.mobile]: {
          margin: `0 ${beat(0.5)}`,
        },
      }}
    >
      <img
        width={15}
        src={PLUS}
        alt="pin"
        css={{
          marginTop: beat(HEADER_SIZE / 2 + HEADER_SIZE / 4),
          transform: 'translateY(-50%)',
        }}
      />
    </div>
  )

  renderTime = ({ startTime, pullRight }) => (
    <div
      css={{
        width: this.props.viewType === MOBILE ? 'auto' : beat(1),
        marginTop: beat(HEADER_SIZE / 2),
        marginBottom: this.props.viewType === MOBILE ? beat(HEADER_SIZE / 2) : 0,
        display: 'flex',
        justifyContent: pullRight ? 'flex-start' : 'flex-end',
        alignSelf: 'flex-start',
        flex:
          this.props.viewType === DESKTOP
            ? '1 1 33%'
            : this.props.viewType === TABLET
              ? '0 0 16%'
              : '1 1 auto',
        fontFamily: Fonts.display,
        fontSize: fontSize(-3),
      }}
    >
      {startTime || ''}
    </div>
  )

  renderContent = ({ content, pullRight, column }) => (
    <div
      css={{
        padding: `${beat(HEADER_SIZE / 4)} 0`,
        display: 'flex',
        flexDirection: column ? 'column' : pullRight ? 'row-reverse' : 'row',
        alignItems: column && pullRight ? 'flex-end' : 'flex-start',
        flex: '1 1 auto',
        flexBasis: '33%',
        textAlign: pullRight ? 'right' : 'left',
        overflow: 'hidden',
        [ViewType.mobile]: {
          paddingBottom: beat(HEADER_SIZE),
        },
      }}
    >
      {content}
    </div>
  )

  renderPeriod = ({
    key, startTime, content, pinAtCenter, column, pullRight,
  }) => [
    startTime && this.props.viewType === MOBILE && this.renderTime({ startTime }),
    <div
      key={key}
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: pullRight ? 'row-reverse' : 'row',
      }}
    >
      {this.props.viewType !== MOBILE && this.renderTime({ startTime, pullRight })}
      {this.renderTimeline({ pinAtCenter })}
      {this.renderContent({ content, column, pullRight })}
    </div>,
  ]

  renderTopic = topic => (
    <div
      css={{
        padding: `${beat(0.25)} ${beat(1)}`,
        display: 'flex',
        alignItems: 'center',
        fontSize: fontSize(-4),
        letterSpacing: Tracking.wide,
        [ViewType.mobile]: {
          padding: `${beat(0.25)} ${beat(0.5)}`,
        },
      }}
    >
      {topic}
    </div>
  )

  renderPoweredBy = sponsor => (
    <div
      key={`powered_by_${sponsor.name}`}
      css={{
        padding: `0 ${beat(1)}`,
        display: 'flex',
        alignItems: 'center',
        color: Colors.bright,
        fontSize: fontSize(-3),
        fontWeight: 600,
        letterSpacing: Tracking.wide,
        [ViewType.mobile]: {
          padding: `0 ${beat(0.5)}`,
        },
      }}
    >
      Powered by
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        css={{
          height: beat(1.5),
          paddingLeft: beat(0.5),
          maxWidth: beat(3),
        }}
      />
    </div>
  )

  renderFundamental = (index, {
    title, topic, sponsor, startTime,
  }) =>
    this.renderPeriod({
      key: `${index}_${title}${sponsor ? `_by_${sponsor.name}` : ''}`,
      content: [
        <div
          key="title"
          css={{
            height: beat(HEADER_SIZE),
            width: '100%',
            padding: `0 ${beat(0.5)}`,
            maxWidth: beat(12),
            backgroundColor: Colors.reactComplementary,
            fontSize: fontSize(-2),
            fontWeight: 600,
            lineHeight: beat(HEADER_SIZE),
            letterSpacing: Tracking.wide,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </div>,
        topic ? this.renderTopic(topic) : null,
        sponsor ? this.renderPoweredBy(sponsor) : null,
      ],
      startTime,
      pinAtCenter: true,
      column: true,
      pullRight: this.props.viewType === DESKTOP ? index % 2 === 1 : false,
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
          ${Colors.bright}
        `,
        backgroundSize: 'cover',
        backgroundBlendMode: 'luminosity',
        [ViewType.mobile]: {
          margin: `0 ${beat(0.5)}`,
        },
        [ViewType.xsMobile]: {
          width: beat(2),
          height: beat(2),
        },
        float: 'left',
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
        <div key="info" css={{ maxWidth: beat(12) }}>
          <span css={{ fontSize: fontSize(0), fontWeight: 600 }}>{title}</span>
          <br />
          <span css={{ fontSize: fontSize(-2), color: Colors.react }}>by {speaker.name}</span>
          <br />
          <div css={{ marginTop: beat(0.25), fontSize: fontSize(-4), color: Colors.bright }}>
            {description}
          </div>
        </div>,
      ],
      startTime,
      pullRight: this.props.viewType === DESKTOP ? index % 2 === 1 : false,
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

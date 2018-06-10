import React from 'react'
import {
  Colors,
  Fonts,
  fontSize,
  beat,
  Tracking,
  LOGOMARK,
  REACT_LOGO,
  BANGKOK_LOGO,
  BACKGROUND,
} from '../design'
import Section from './Section'

export class HeaderSection extends React.Component {
  renderContent = () => [
    <img key="left-logo" css={{ height: beat(5) }} src={LOGOMARK} alt="" />,
    <img key="react-logo" css={{ height: beat(1.5) }} src={REACT_LOGO} alt="" />,
    <img key="bangkok-logo" css={{ height: beat(1) }} src={BANGKOK_LOGO} alt="" />,
    <div
      key="3.0.0"
      css={{
        fontSize: fontSize(14),
        lineHeight: 1,
        letterSpacing: Tracking.wide,
        fontWeight: 600,
      }}
    >
      3.0.0
    </div>,
    <p
      key="brief-information"
      css={{
        fontSize: fontSize(-2),
        letterSpacing: Tracking.wide,
        fontWeight: 400,
      }}
    >
      June 24th, Synergy Hall, EnCo
    </p>,
    <div key="get-ticket-button">\\ Put Ticket Button Here \\</div>,
  ]

  renderScrollGuide = () => (
    <div
      css={{
        position: 'absolute',
        bottom: beat(1),
        letterSpacing: Tracking.wide,
        fontSize: fontSize(-5),
      }}
    >
      <div
        css={{
          width: 1,
          height: 80,
          margin: '10px auto',
          background: Colors.white,
        }}
      />
      S C R O L L
    </div>
  )

  render () {
    return (
      <Section
        cssExtension={{
          background: `
          radial-gradient(circle at 50% 175%, rgba(0, 216, 255, 0.75), rgba(62, 62, 70, 1) 90%),
          url(${BACKGROUND}) no-repeat fixed bottom,
          rgba(62, 62, 70, 1)
        `,
          backgroundSize: 'cover',
          backgroundBlendMode: 'screen, multiply',
          fontFamily: Fonts.display,
          '&>*': {
            paddingTop: beat(1),
          },
        }}
      >
        {this.renderContent()}
        {this.renderScrollGuide()}
      </Section>
    )
  }
}

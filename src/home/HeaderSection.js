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
        }}
      >
        <img css={{ height: beat(5), paddingBottom: beat(1) }} src={LOGOMARK} alt="Logo" />
        <img css={{ height: beat(1.5), paddingBottom: beat(1) }} src={REACT_LOGO} alt="REACT" />
        <img css={{ height: beat(1), paddingBottom: beat(1) }} src={BANGKOK_LOGO} alt="BANGKOK" />
        <div css={{
          paddingBottom: beat(1),
          letterSpacing: Tracking.wide,
          fontSize: fontSize(14),
          fontWeight: 600,
          lineHeight: 1,
        }} >
          3.0.0
        </div>
        <p css={{
          fontSize: fontSize(-2),
          letterSpacing: Tracking.wide,
          fontWeight: 400,
        }} >
          June 24th, Synergy Hall, EnCo
        </p>
      </Section>
    )
  }
}

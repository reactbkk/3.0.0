import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import {
  Colors,
  Fonts,
  fontSize,
  beat,
  Tracking,
  LOGO,
  PARTICLES,
} from '../design'
import { Section } from './Section'
import { SelfCheckInButton } from './SelfCheckInButton'
import { ParallaxElement } from './ParallaxElement'
import { MOBILE } from './withViewType'

const LINE_SPACING = 30

export class HeaderSection extends React.Component {
  static propTypes = {
    innerWidth: PropTypes.number,
    viewType: PropTypes.string,
  }

  renderReactLogo = ({ small } = {}) => {
    const height = small ? 50 : 100
    const width = (height * (761 - LINE_SPACING * 5) / 200) + LINE_SPACING * 5
    return (
      <svg width={width} height={height} css={{
        height,
        display: 'block',
        fontFamily: Fonts.display,
        fontSize: height,
        letterSpacing: `${LINE_SPACING}px`,
        fontWeight: 800,
        zIndex: 20,
      }}>
        <defs>
          <mask id="logo">
            <text x="50%" y="50%" mask="url(#logo)" fill="none" textAnchor="middle" alignmentBaseline="middle">
              RE<tspan fill="white" alignmentBaseline="middle">A</tspan>CT
            </text>
            <image x={small ? '24.5%' : '16%'} y="20%" height={height * 2.4} xlinkHref={LOGO} />
            <text x="50%" y="50%" mask="url(#logo)" fill="white" textAnchor="middle" alignmentBaseline="middle">
              RE<tspan fill="none" alignmentBaseline="middle">A</tspan>CT
            </text>
          </mask>
        </defs>
        <g mask="url(#logo)">
          <rect width="100%" height="100%" fill={Colors.react} />
          {_.times(15, index => (
            <circle
              key={`circle-${index}`}
              cx="95%"
              cy="200%"
              r={width - (width * (index + 1) / 15) + 20}
              stroke={Colors.reactBright}
              strokeWidth={width / 400 * (index + 1) + height / 50 + 5}
              fill="none"
            />
          ))}
        </g>
      </svg>
    )
  }

  renderBangkok = () => (
    <div css={{
      paddingBottom: beat(1),
      // TODO: Make global
      letterSpacing: '0.5rem',
      fontSize: fontSize(7),
      fontWeight: 600,
    }} >
      BANGKOK
    </div>
  )

  renderThreePointZeroPointZero = () => (
    <div css={{
      paddingBottom: beat(1),
      letterSpacing: Tracking.wide,
      fontSize: fontSize(14),
      fontWeight: 600,
      zIndex: 5,
    }} >
      3.0.0
    </div>
  )

  renderScrollGuide = () => (
    <div
      css={{
        letterSpacing: Tracking.wide,
        fontSize: fontSize(-5),
      }}
    >
      <div
        css={{
          width: 1,
          height: beat(3),
          margin: `${beat(1)} auto`,
          background: Colors.brightest,
        }}
      />
      S C R O L L
    </div>
  )

  renderParticle = index => {
    const x = Math.round(((Math.random() + Math.random() + 1) % 2) * 50)
    const y = Math.round(Math.random() * 100)
    const z = Math.random() * x * y / 800
    const opacity = Math.random() > 0.5 ? 1 : 0.5
    const type = Math.round(Math.random() * (PARTICLES.length - 1))

    return (
      <ParallaxElement key={`particle-${index}`} z={z} x={x} y={y} opacity={opacity}>
        <img width={beat(z * 10)} src={PARTICLES[type]} alt="particle-1" css={{
          filter: `blur(${z / 2}px)`,
        }} />
      </ParallaxElement>
    )
  }

  render () {
    return (
      <Section
        cssExtension={{
          justifyContent: 'space-between',
          fontFamily: Fonts.display,
          color: 'white',
        }}
      >
        <div css={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {this.renderReactLogo({ small: this.props.viewType === MOBILE })}
          {this.renderBangkok()}
          {this.renderThreePointZeroPointZero()}
          <SelfCheckInButton />
        </div>
        {this.renderScrollGuide()}
        {_.times(this.props.innerWidth / 30, this.renderParticle)}
      </Section>
    )
  }
}

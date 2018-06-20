import _ from 'lodash'
import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import {
  Colors,
  Fonts,
  fontSize,
  beat,
  Tracking,
  LOGOMARK,
} from '../design'
import { Section } from './Section'
import { images } from '../sparkles-effect'

export class HeaderSection extends React.Component {
  renderReactLogo = (height = 100) => {
    // TODO: Dynamic scale
    const width = (height * (761 - 20 * 5) / 200) + 20 * 5
    return (
      <svg width={width} height={height} css={{
        height,
        display: 'block',
        fontFamily: Fonts.display,
        fontSize: height,
        letterSpacing: '20px',
        fontWeight: 600,
        zIndex: 20,
      }}>
        <defs>
          <mask id="logo">
            <text x="50%" y="50%" mask="url(#logo)" fill="none" textAnchor="middle" alignmentBaseline="middle">
              RE<tspan fill="white" alignmentBaseline="middle">A</tspan>CT
            </text>
            <image x="14%" y="20%" height={height * 2.4} xlinkHref={LOGOMARK} />
            <text x="50%" y="50%" mask="url(#logo)" fill="white" textAnchor="middle" alignmentBaseline="middle">
              RE<tspan fill="none" alignmentBaseline="middle">A</tspan>CT
            </text>
          </mask>
        </defs>
        <g mask="url(#logo)">
          <rect width="100%" height="100%" fill={Colors.react} />
          {_.times(15, _.stubFalse).map((v, index) => (
            <circle
              key={`circle-${index}`}
              cx="92%"
              cy="200%"
              r={height * 4.5 - height / 4.5 * (index + 1)}
              stroke={Colors.reactLight}
              strokeWidth={height / 20 + height / 100 * (index + 1)}
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
      fontWeight: 800,
    }} >
      BANGKOK
    </div>
  )

  renderSelfCheckInButton = () => (
    <button css={{
      height: beat(5),
      width: beat(5),
      padding: beat(0.5),
      borderRadius: '100%',
      backgroundColor: Colors.react,
      color: Colors.reactDark,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: fontSize(3),
      fontWeight: 600,
      cursor: 'pointer',
      zIndex: 20,
    }}>
      <span css={{ fontSize: fontSize(5) }}>Self</span>
      <span>Check-in</span>
    </button>
  )

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
          height: beat(3),
          margin: `${beat(1)} auto`,
          background: Colors.white,
        }}
      />
      S C R O L L
    </div>
  )

  renderParticle = (index, type, z, css) => (
    <Parallax
      key={`particle-${index}`}
      offsetYMax={z * z * 1000}
      offsetYMin={-z * z * 1000}
      slowerScrollRate={z < 0}
      css={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: z,
        ...css,
      }}
    >
      <img width={beat(z * 10)} src={images[type]} alt="particle-1" css={{
        filter: `blur(${z / 2}px)`,
      }} />
    </Parallax>
  )

  render () {
    return (
      <Section
        cssExtension={{
          fontFamily: Fonts.display,
          color: 'white',
        }}
      >
        {this.renderReactLogo()}
        {this.renderBangkok()}
        <div css={{
          paddingBottom: beat(1),
          letterSpacing: Tracking.wide,
          fontSize: fontSize(14),
          fontWeight: 600,
          zIndex: 20,
        }} >
          3.0.0
        </div>
        {this.renderSelfCheckInButton()}
        {this.renderScrollGuide()}
        {_.times(50, _.stubFalse).map((v, index) => {
          // TODO: Number of particles should depends on area
          // TODO: Particle size distribution
          // TODO: Filter out center zone
          const x = 1 + Math.random() * 100
          const y = 1 + Math.random() * 100
          const opacity = Math.random() > 0.5 ? 1 : 0.5
          const type = Math.round(Math.random() * (images.length - 1))
          return this.renderParticle(index, type, Math.random() * x * y / 500, {
            left: `${x}%`,
            top: `${y}%`,
            opacity,
          })
        })}
      </Section>
    )
  }
}

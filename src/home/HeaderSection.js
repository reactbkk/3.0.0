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

function ParallaxElement ({
  z, x, y, opacity, children,
}) {
  return (
    <Parallax
      offsetYMax={z * z * 1000}
      offsetYMin={-z * z * 1000}
      slowerScrollRate={z < 0}
      css={{
        // pointerEvents: 'none',
        zIndex: Math.round(z),
        ...(x && y ? {
          position: 'absolute',
          left: `${x}vw`,
          top: `${y}vh`,
        }: {}),
        opacity: opacity || 1,
      }}
    >
      {children}
    </Parallax>
  )
}

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
      height: beat(4),
      width: beat(4),
      // padding: `0 ${beat(0.5)}`,
      borderRadius: '100%',
      border: `solid 1px ${Colors.white}`,
      backgroundColor: 'transparent',
      color: Colors.react,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: fontSize(2),
      fontWeight: 600,
      cursor: 'pointer',
      zIndex: 20,
      transition: 'all ease 0.2s',
      '&:hover': {
        backgroundColor: Colors.white,
        transform: 'scale(1.1)',
      },
    }}>
      <span css={{ fontWeight: 400 }}>Self</span>
      <span>Check-in</span>
      .
    </button>
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
          background: Colors.white,
        }}
      />
      S C R O L L
    </div>
  )

  renderParticle = index => {
    // TODO: Number of particles should depends on area
    // TODO: Particle size distribution
    // TODO: Filter out center zone
    const x = Math.round(Math.random() * 100)
    const y = Math.round(Math.random() * 100)
    const z = Math.random() * x * y / 500
    const opacity = Math.random() > 0.5 ? 1 : 0.5
    const type = Math.round(Math.random() * (images.length - 1))

    return (
      <ParallaxElement key={`particle-${index}`} z={z} x={x} y={y} opacity={opacity}>
        <img width={beat(z * 10)} src={images[type]} alt="particle-1" css={{
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
          {this.renderReactLogo()}
          {this.renderBangkok()}
          <div css={{
            paddingBottom: beat(1),
            letterSpacing: Tracking.wide,
            fontSize: fontSize(14),
            fontWeight: 600,
            zIndex: 5,
          }} >
            3.0.0
          </div>
          {this.renderSelfCheckInButton()}
        </div>
        {this.renderScrollGuide()}
        {_.times(50, _.stubFalse).map((v, index) => this.renderParticle(index))}
      </Section>
    )
  }
}

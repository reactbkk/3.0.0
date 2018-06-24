import React, { Fragment } from 'react'
import { beat, Colors, fontSize, Fonts } from '../design'

import {
  PLATINUM_SPONSORS,
  GOLD_SPONSORS,
  SILVER_SPONSORS,
  INDIVIDUAL_SPONSORS,
} from './SponsorsData'

const PLATINUM = {
  color: Colors.darkest,
  baseColor: Colors.platinum,
  highlightColor: Colors.platinumHighlight,
  glow: Colors.platinumGlow,
  name: 'Platinum',
}

const GOLD = {
  color: Colors.darkest,
  baseColor: Colors.gold,
  highlightColor: Colors.goldHighlight,
  name: 'Gold',
}

const SILVER = {
  color: Colors.darkest,
  baseColor: Colors.silver,
  highlightColor: Colors.silverHighlight,
  name: 'Silver',
}

const INDIVIDUAL = {
  color: Colors.brightest,
  baseColor: Colors.anotherReact,
  highlightColor: Colors.reactBright,
  name: 'Individual Sponsors',
}

const HEARTS = ['❤️', '🧡', '💛', '💚', '💙', '💜']
export class SponsorsSectionContent extends React.Component {
  renderTag = ({
    name, color, baseColor, highlightColor, glow,
  }) => (
    <div
      css={{
        position: 'relative',
        height: beat(1.5),
        minWidth: beat(2.5),
        margin: `${beat(1)} 0 ${beat(0.25)}`,
        padding: `2px ${beat(0.75)} 0`,
        color,
        backgroundColor: baseColor,
        fontFamily: Fonts.display,
        fontSize: fontSize(-2),
        fontWeight: 600,
        lineHeight: beat(1.5),
        textAlign: 'center',
        textTransform: 'uppercase',
        borderRadius: '3px',
        overflow: 'hidden',
        boxShadow: `0 0 ${beat(1)} 0 ${glow || 'transparent'}`,
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          height: beat(0.7),
          width: '100%',
          backgroundColor: highlightColor,
          transform: 'translate(-50%, -50%) rotate(-40deg)',
          zIndex: 1,
        }}
      />
      <div css={{ position: 'relative', zIndex: 2 }}>{name}</div>
    </div>
  )

  renderSponsor = (sponsor, size) => (
    <a
      key={sponsor.logo}
      href={sponsor.website}
      title={sponsor.title}
      target="_blank"
      css={{
        height: beat(size * 2),
        width: beat(size * 3),
        margin: 1,
        padding: `${beat(0.25)} ${beat(1)}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: Colors.dark,
      }}
    >
      <img
        css={{
          maxHeight: '100%',
          maxWidth: '100%',
        }}
        src={sponsor.logo}
        alt=""
      />
    </a>
  )

  renderSponsorGroup = (sponsors, size) => (
    <div
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: beat(25),
        justifyContent: 'center',
        alignItems: 'center',
        margin: `${beat(0.5)} auto`,
      }}
    >
      {sponsors.map(sponsor => this.renderSponsor(sponsor, size))}
    </div>
  )

  render () {
    return (
      <Fragment>
        {this.renderTag(PLATINUM)}
        {this.renderSponsorGroup(PLATINUM_SPONSORS, 3)}
        {this.renderTag(GOLD)}
        {this.renderSponsorGroup(GOLD_SPONSORS, 1.5)}
        {this.renderTag(SILVER)}
        {this.renderSponsorGroup(SILVER_SPONSORS, 1)}
        {this.renderTag(INDIVIDUAL)}
        <ul
          css={{
            padding: 0,
            fontSize: fontSize(-5),
            textAlign: 'center',
            listStyleType: 'none',
          }}
        >
          {INDIVIDUAL_SPONSORS.map((sponsorName, index) => (
            <div css={{ margin: beat(0.25) }}>
              {HEARTS[index % HEARTS.length]} {sponsorName} {HEARTS[index % HEARTS.length]}
            </div>
          ))}
        </ul>
      </Fragment>
    )
  }
}

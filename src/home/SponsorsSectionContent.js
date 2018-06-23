import React, { Fragment } from 'react'
import { beat, Colors, fontSize } from '../design'

import { PLATINUM_SPONSORS, GOLD_SPONSORS, SILVER_SPONSORS, INDIVIDUAL_SPONSORS } from './SponsorsData'

const HEARTS = ['❤️', '🧡', '💛', '💚', '💙', '💜']
export class SponsorsSectionContent extends React.Component {
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

  render() {
    return (
      <Fragment>
        {this.renderSponsorGroup(PLATINUM_SPONSORS, 3)}
        {this.renderSponsorGroup(GOLD_SPONSORS, 1.5)}
        {this.renderSponsorGroup(SILVER_SPONSORS, 1)}
        <ul css={{
          padding: 0,
          fontSize: fontSize(-5),
          textAlign: 'center',
          listStyleType: 'none',
        }}>
          {INDIVIDUAL_SPONSORS.map((sponsorName, index) => (
            <div css={{ margin: beat(0.25) }}>
              {HEARTS[index % (HEARTS.length)]} {sponsorName} {HEARTS[index % (HEARTS.length)]}
            </div>
          ))}
        </ul>
      </Fragment>
    )
  }
}

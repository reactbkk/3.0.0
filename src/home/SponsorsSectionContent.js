import React, { Fragment } from 'react'
import { beat } from '../design'

import { PLATINUM_SPONSORS, GOLD_SPONSORS, SILVER_SPONSORS } from './SponsorsData'

export class SponsorsSectionContent extends React.Component {
  renderSponsor = (sponsor, size) => (
    <a
      key={sponsor.logo}
      href={sponsor.website}
      title={sponsor.title}
      target="_blank"
      css={{
        padding: `${beat(0.25)} ${beat(1)}`,
        cursor: 'pointer',
      }}
    >
      <img
        css={{
          maxHeight: beat(size * 1.5),
          maxWidth: beat(size * 3),
          transition: 'all ease 0.2s',
          opacity: 0.9,
          '&:hover': {
            opacity: 1,
            transform: 'scale(1.05)',
          },
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
        {this.renderSponsorGroup(PLATINUM_SPONSORS, 3)}
        {this.renderSponsorGroup(GOLD_SPONSORS, 1.5)}
        {this.renderSponsorGroup(SILVER_SPONSORS, 1)}
      </Fragment>
    )
  }
}

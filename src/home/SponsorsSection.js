import React from 'react'
import { beat } from '../design'

import Section from './Section'
import AppMan from './sponsors/appman.svg'
import EventPop from './sponsors/eventpop.svg'
import Metromerce from './sponsors/metromerce.svg'
import Nextzy from './sponsors/nextzy.svg'
import Odds from './sponsors/odds.svg'
import ProntoTools from './sponsors/prontotools.svg'
import PttDigital from './sponsors/pttdigital.svg'
import SixNetwork from './sponsors/sixnetwork.svg'
import Skooldio from './sponsors/skooldio.svg'
import Taskworld from './sponsors/taskworld.svg'
import TelenorDigital from './sponsors/telenordigital.svg'
import Tencent from './sponsors/tencent.svg'
import ThaiProgrammer from './sponsors/thaiprogrammer.svg'
import ThoughtWorks from './sponsors/thoughtworks.svg'

const PLATINUM_SPONSORS = [
  {
    logo: TelenorDigital,
    website: null,
  },
]

const GOLD_SPONSORS = [
  {
    logo: PttDigital,
    website: null,
  },
  {
    logo: ThoughtWorks,
    website: null,
  },
  {
    logo: Taskworld,
    website: null,
  },
  {
    logo: Odds,
    website: null,
  },
  {
    logo: AppMan,
    website: null,
  },
]

const SILVER_SPONSORS = [
  {
    logo: SixNetwork,
    website: null,
  },
  {
    logo: Tencent,
    website: null,
  },
  {
    logo: Nextzy,
    website: null,
  },
  {
    logo: ProntoTools,
    website: null,
  },
  {
    logo: Skooldio,
    website: null,
  },
  {
    logo: Metromerce,
    website: null,
  },
  {
    logo: EventPop,
    website: null,
  },
  {
    logo: ThaiProgrammer,
    website: null,
  },
]

export class SponsorsSection extends React.Component {
  renderSponsor = (sponsor, size) => (
    <div
      key={sponsor.logo}
      css={{
        padding: `${beat(0.25)} ${beat(1)}`,
        cursor: 'pointer',
      }}
    >
      <img
        css={{
          maxHeight: beat(size),
          maxWidth: beat(size * 3),
          transition: 'all ease 0.2s',
          '&:hover': {
            transform: 'scale(1.2)',
          },
        }}
        src={sponsor.logo}
        alt=""
      />
    </div>
  )

  renderSponsorGroup = (sponsors, size) => (
    <div
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: beat(25),
        justifyContent: 'center',
        alignItems: 'center',
        margin: `${beat(0.5)} 0`,
      }}
    >
      {sponsors.map(sponsor => this.renderSponsor(sponsor, size))}
    </div>
  )

  render () {
    return (
      <Section title="Sponsors" cssExtension={{ background: 'black' }}>
        {this.renderSponsorGroup(PLATINUM_SPONSORS, 3)}
        {this.renderSponsorGroup(GOLD_SPONSORS, 2)}
        {this.renderSponsorGroup(SILVER_SPONSORS, 1)}
      </Section>
    )
  }
}

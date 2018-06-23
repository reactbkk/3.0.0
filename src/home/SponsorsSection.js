import React from 'react'
import { beat, Colors } from '../design'

import { Section } from './Section'
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
    website: 'https://telenordigital.com/',
    title: 'Telenor Digital',
  },
]

const GOLD_SPONSORS = [
  {
    logo: PttDigital,
    website: 'http://www.pttdigital.com/home/',
    title: 'PTT Digital Solutions',
  },
  {
    logo: ThoughtWorks,
    website: 'https://www.thoughtworks.com/',
    title: 'ThoughtWorks',
  },
  {
    logo: Taskworld,
    website: 'https://taskworld.com/',
    title: 'Taskworld',
  },
  {
    logo: Odds,
    website: 'https://medium.com/odds-team',
    title: 'ODDS',
  },
  {
    logo: AppMan,
    website: 'https://www.appman.co.th/',
    title: 'AppMan',
  },
]

const SILVER_SPONSORS = [
  {
    logo: SixNetwork,
    website: 'https://six.network/',
    title: 'SIX Network',
  },
  {
    logo: Tencent,
    website: 'https://www.tencent.co.th/th/',
    title: 'Tencent (Thailand)',
  },
  {
    logo: Nextzy,
    website: 'https://nextzy.me/',
    title: 'Nextzy Technologies',
  },
  {
    logo: ProntoTools,
    website: 'https://www.prontotools.io/',
    title: 'Pronto Tools',
  },
  {
    logo: Skooldio,
    website: 'https://www.skooldio.com/',
    title: 'Skooldio',
  },
  {
    logo: Metromerce,
    website: 'https://www.metromerce.com/',
    title: 'Metromerce',
  },
  {
    logo: EventPop,
    website: 'https://www.eventpop.me/',
    title: 'Event Pop',
  },
  {
    logo: ThaiProgrammer,
    website: 'https://thaiprogrammer.org/',
    title: 'Thai Programmer Association',
  },
]

export class SponsorsSection extends React.Component {
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
        margin: `${beat(0.5)} 0`,
      }}
    >
      {sponsors.map(sponsor => this.renderSponsor(sponsor, size))}
    </div>
  )

  render () {
    return (
      <Section title="Sponsors" cssExtension={{ background: Colors.darkest }}>
        {this.renderSponsorGroup(PLATINUM_SPONSORS, 3)}
        {this.renderSponsorGroup(GOLD_SPONSORS, 1.5)}
        {this.renderSponsorGroup(SILVER_SPONSORS, 1)}
      </Section>
    )
  }
}

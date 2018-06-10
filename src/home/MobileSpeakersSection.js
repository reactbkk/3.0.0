import _ from 'lodash'
import React from 'react'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import GithubIcon from 'react-icons/lib/fa/github'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import MediumIcon from 'react-icons/lib/fa/medium'
import WebsiteIcon from 'react-icons/lib/fa/chain'

import { SPEAKERS } from './Speakers'
import { Section } from './Section'
import { Colors, Fonts, fontSize, beat } from '../design'

export class MobileSpeakersSection extends React.Component {
  getIcon = type => {
    switch (type) {
      case 'facebook':
        return FacebookIcon
      case 'github':
        return GithubIcon
      case 'linkedin':
        return LinkedinIcon
      case 'medium':
        return MediumIcon
      default:
        return WebsiteIcon
    }
  }

  renderLinks = (name, links) => (
    <div css={{
      display: 'inline-flex',
    }} >
      {_.map(links, (link, type) => {
        const Icon = this.getIcon(type)
        return (
          <a href={link}>
            <div
              css={{
                width: beat(1.5),
                height: beat(1.5),
                marginTop: beat(0.25),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: Colors.white,
                color: Colors.grey800,
                fontSize: type === 'github' ? fontSize(1.5) : fontSize(1),
              }}
            >
              <Icon key={link} className="icon" />
            </div>
          </a>
        )
      })}
    </div>
  )

  renderSpeakerPhoto = photo => (
    <div
      css={{
        height: '50vw',
        width: '55vw',
        background: `
          linear-gradient(rgba(0, 88, 255, 0.5) 45%, rgba(0, 216, 255, 0.75)),
          url(${photo}) no-repeat center
        `,
        backgroundSize: 'cover',
        backgroundBlendMode: 'hard-light',
      }}
    />
  )

  renderSpeakerInfo = (name, from, links) => (
    <div
      css={{
        width: '50vw',
        padding: beat(1),
        boxSizing: 'border-box',
        fontFamily: Fonts.display,
      }}
    >
      <div css={{ fontSize: fontSize(1), fontWeight: 600 }}>{name}</div>
      <div css={{ fontSize: fontSize(-3), lineHeight: 1.5 }}>{from}</div>
      {this.renderLinks(name, links)}
    </div>
  )

  renderSpeaker = speaker => (
    <div
      key={speaker.name}
      className="speaker-item"
      css={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'right',
        '&:nth-child(2n+1)': {
          flexDirection: 'row-reverse',
          textAlign: 'left',
        },
      }}
    >
      {this.renderSpeakerPhoto(speaker.photo)}
      {this.renderSpeakerInfo(speaker.name, speaker.from, speaker.links)}
    </div>
  )

  render () {
    return (
      <Section
        title="Speakers"
        cssExtension={{
          background: `linear-gradient(${Colors.grey800}, ${Colors.grey900})`,
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
        }}
      >
        {SPEAKERS.map(speaker => this.renderSpeaker(speaker))}
      </Section>
    )
  }
}

import _ from 'lodash'
import React from 'react'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import GithubIcon from 'react-icons/lib/fa/github'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import MediumIcon from 'react-icons/lib/fa/medium'
import WebsiteIcon from 'react-icons/lib/fa/chain'

import AUN from './speakers/aun.jpg'
import BABE from './speakers/babe.jpg'
import BENZ from './speakers/benz.jpg'
import CAL from './speakers/cal.jpg'
import CHRIS from './speakers/chris.jpg'
import HAM from './speakers/ham.jpg'
import HOLLY from './speakers/holly.jpg'
import KEYA from './speakers/keya.jpg'
import PHOOM from './speakers/phoom.jpg'
import VEHA from './speakers/veha.jpg'
import WIN from './speakers/win.jpg'
import NET from './speakers/net.jpg'
import POND from './speakers/pond.jpg'
import Section from './Section'
import { Colors, Fonts, fontSize, beat } from '../design'
import { ActionButton } from './ActionButton'

const SPEAKERS = [
  {
    name: 'Suwitcha Sugthana',
    photo: POND,
    from: 'GuCode',
    links: {
      github: 'https://github.com/gucodelive',
      facebook: 'https://www.facebook.com/gucodelive/',
    },
  },
  {
    name: 'Jirat Kijlerdpornpailoj',
    photo: NET,
    from: 'GuCode',
    links: {
      github: 'https://github.com/gucodelive',
      facebook: 'https://www.facebook.com/gucodelive/',
    },
  },
  {
    name: 'Keya Desai',
    photo: KEYA,
    from: 'Lead Consultant Developer @ThoughtWorks',
    links: {
      github: 'https://github.com/keyadesai',
      website: 'https://keyadesai.com',
    },
  },
  {
    name: 'Manatsawin Hanmongkolchai',
    photo: WIN,
    from: 'Junior Architect @Wongnai',
    links: {
      github: 'https://github.com/whs',
      facebook: 'https://www.facebook.com/whs.in.th',
    },
  },
  {
    name: 'Phoomparin Mano',
    photo: PHOOM,
    from: 'Developer @iTAX',
    links: {
      github: 'https://github.com/phoomparin',
      website: 'https://phoom.in.th',
    },
  },
  {
    name: 'Jessada Trirongkit',
    photo: AUN,
    from: 'Software Engineer @Oozou',
    links: {
      github: 'https://github.com/dekdekbaloo',
      facebook: 'https://www.facebook.com/JessaAun',
    },
  },
  {
    name: 'Veha Suwatphisankij',
    photo: VEHA,
    from: 'Full Stack Engineer @AppSmiths Thailand ',
    links: {
      github: 'https://github.com/vehas',
      facebook: 'https://www.facebook.com/vehas',
    },
  },
  {
    name: 'Christopher Ng',
    photo: BABE,
    from: 'Mobile Developer @EventPop',
    links: {
      github: 'https://github.com/babedev',
      facebook: 'https://www.facebook.com/babedev',
    },
  },
  {
    name: 'Komkanit Sujautra',
    photo: CAL,
    from: 'Intern @Jitta',
    links: {
      github: 'https://github.com/komcal',
      facebook: 'https://www.facebook.com/komcal',
    },
  },
  {
    name: 'Rujira Aksornsin',
    photo: HOLLY,
    from: 'Frontend Web Lead @ AppMan',
    links: {
      linkedin: 'https://www.linkedin.com/in/rujira-aksornsin-632b5224',
      medium: 'https://medium.com/@HollyJira',
    },
  },
  {
    name: 'Chakrit Likitkhajorn',
    photo: CHRIS,
    from: 'Vice President @Taskworld',
    links: {
      github: 'https://github.com/chrisza4',
      facebook: 'https://www.facebook.com/chakrit.likitkhajorn',
    },
  },
  {
    name: 'Pallop Chaoputhipuchong',
    photo: HAM,
    from: 'Software Engineer @Jitta',
    links: {
      github: 'https://github.com/vannizer',
      facebook: 'https://www.facebook.com/pallop.chao',
    },
  },
  {
    name: 'Tananan Tangthanachaikul',
    photo: BENZ,
    from: 'Full-stack Developer @TakeMeTour',
    links: {
      github: 'https://github.com/MicroBenz',
      facebook: 'https://www.facebook.com/MicroBenz',
    },
  },
]

export class SpeakersSection extends React.Component {
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

  renderLinks = (name, links) =>
    !_.isEmpty(links) ? (
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: beat(0),
          overflow: 'hidden',
          opacity: 0,
          transition: 'all ease 0.2s',
          '>*': {
            marginLeft: beat(0.25),
            marginBottom: beat(0.25),
          },
          '.speaker-item:hover &, .speaker-item:focus-within &': {
            width: beat(3),
            opacity: 1,
          },
        }}
      >
        {_.map(links, (link, type) => {
          const Icon = this.getIcon(type)
          return (
            <a href={link}>
              <div
                css={{
                  width: beat(2.5),
                  height: beat(2.5),
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: Colors.white,
                  color: Colors.grey800,
                  fontSize: fontSize(5),
                  transition: 'all ease 0.2s',
                  borderTopLeftRadius: beat(0.25),
                  borderBottomRightRadius: beat(0.25),
                  opacity: 0.9,
                  '.icon': {
                    transform: 'scale(0.8)',
                  },
                  '&:hover, &:focus': {
                    opacity: 1,
                    '.icon': {
                      transition: 'all ease-out 0.2s',
                      transform: 'scale(1)',
                    },
                  },
                }}
              >
                <Icon key={link} className="icon" />
              </div>
            </a>
          )
        })}
      </div>
    ) : null

  renderSpeakerPhoto = photo => (
    <div
      css={{
        width: beat(4),
        background: `
          linear-gradient(rgba(0, 88, 255, 0.5) 45%, rgba(0, 216, 255, 0.75)),
          url(${photo}) no-repeat center
        `,
        backgroundSize: 'cover',
        backgroundBlendMode: 'hard-light',
        borderTopLeftRadius: beat(0.25),
        borderBottomRightRadius: beat(0.25),
        boxShadow: `${beat(0.75)} ${beat(0.5)} 0 1px ${Colors.grey900}`,
      }}
    />
  )

  renderSpeakerInfo = (name, from) => (
    <div
      css={{
        position: 'absolute',
        left: 0,
        bottom: beat(0.25),
        width: beat(6),
        fontFamily: Fonts.display,
        lineHeight: 1.2,
        mixBlendMode: 'difference',
      }}
    >
      <div css={{ fontSize: fontSize(0), fontWeight: 600 }}>{name}</div>
      <div css={{ fontSize: fontSize(-5) }}>{from}</div>
    </div>
  )

  renderSpeaker = speaker => (
    <div
      key={speaker.name}
      className="speaker-item"
      css={{
        position: 'relative',
        height: beat(6),
        width: beat(7),
        marginBottom: beat(0.25),
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'right',
        '&:nth-child(1)': {
          marginTop: beat(0),
        },
        '&:nth-child(2)': {
          marginTop: beat(-2),
        },
        '&:nth-child(3)': {
          marginTop: beat(-4),
        },
        '&:only-child': {
          marginTop: beat(-2),
        },
        transition: 'all ease 0.2s',
        '&:hover, &:focus-within': {
          width: beat(10),
          textAlign: 'left',
        },
      }}
    >
      {this.renderSpeakerPhoto(speaker.photo)}
      {this.renderSpeakerInfo(speaker.name, speaker.from)}
      {this.renderLinks(speaker.name, speaker.links)}
    </div>
  )

  render () {
    return (
      <Section
        title="Speakers"
        cssExtension={{
          background: `linear-gradient(${Colors.grey800}, ${Colors.grey900})`,
        }}
      >
        <div
          css={{
            paddingTop: beat(4),
          }}
        >
          {sliceArrayRepeatedly(SPEAKERS, 3).map((row, i) => (
            <div
              key={i}
              css={{
                display: 'flex',
                justifyContent: 'center',
                maxWidth: beat(25),
              }}
            >
              {row.map(speaker => this.renderSpeaker(speaker))}
            </div>
          ))}
        </div>
        <div css={{ textAlign: 'center', marginTop: beat(1) }}>
          <ActionButton href="https://www.facebook.com/pg/reactbkk/photos/?tab=album&album_id=172683636738199">
            Speakers introduction
          </ActionButton>
        </div>
      </Section>
    )
  }
}

function sliceArrayRepeatedly (a, n) {
  const out = []
  for (let i = 0; i < a.length; i += n) {
    out.push(a.slice(i, i + n))
  }
  return out
}

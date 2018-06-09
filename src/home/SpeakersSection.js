import React from 'react'
import {
  Colors,
  Fonts,
  fontSize,
  beat,
} from '../design'
import AUN from './speakers/aun.jpg'
import BABE from './speakers/babe.jpg'
import BENZ from './speakers/benz.jpg'
import CAL from './speakers/cal.jpg'
import CHRIS from './speakers/chris.jpg'
import HAM from './speakers/ham.jpg'
import HOLLY from './speakers/holly.jpg'
import KEYA from './speakers/keya.jpg'
import NOTSU from './speakers/notsu.jpg'
import PHOOM from './speakers/phoom.jpg'
import VEHA from './speakers/veha.jpg'
import WIN from './speakers/win.png'
import Section from './Section'

const SPEAKERS = [
  // GUCODE TEAM,
  {
    name: 'Keya Desai',
    photo: KEYA,
    from: 'Lead Consultant Developer @ThoughtWorks',
  }, {
    name: 'Manatsawin Hanmongkolchai',
    photo: WIN,
    from: 'Junior Architect @Wongnai',
  }, {
    name: 'Phoomparin Mano',
    photo: PHOOM,
    from: 'Developer @iTAX',
  }, {
    name: 'Jessada Trirongkit',
    photo: AUN,
    from: 'Software Engineer @Oozou',
  }, {
    name: 'Veha Suwatphisankij',
    photo: VEHA,
    from: 'Full Stack Engineer @AppSmiths Thailand ',
  }, {
    name: 'Christopher Ng',
    photo: HOLLY,
    from: 'Mobile Developer @EventPop',
  }, {
    name: 'Komkanit Sujautra',
    photo: CAL,
    from: 'Intern @Jitta',
  }, {
    name: 'Rujira Aksornsin',
    photo: BABE,
    from: 'Frontend Web Lead @ AppMan',
  }, {
    name: 'Chakrit Likitkhajorn',
    photo: CHRIS,
    from: 'Vice President @Taskworld',
  }, {
    name: 'Pichet Itngam',
    photo: NOTSU,
    from: 'Head of R&D @Dek-D',
  }, {
    name: 'Pallop Chaoputhipuchong',
    photo: HAM,
    from: 'Software Engineer @Jitta',
  }, {
    name: 'Tananan Tangthanachaikul',
    photo: BENZ,
    from: 'Full-stack Developer @TakeMeTour',
  },
]

export default class SpeakersSection extends React.Component {
  renderSpeaker = speaker => (
    <div key={speaker.name} css={{
      position: 'relative',
      height: beat(6),
      width: beat(6.5),
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'right',
      '&:nth-child(3n-1)': {
        marginTop: beat(2),
      },
      '&:nth-child(3n-2)': {
        marginTop: beat(4),
      },
      transition: 'all ease 0.2s',
      '&:hover': {
        width: beat(12),
        textAlign: 'left',
      },
    }}>
      <div css={{
        width: beat(4),
        background: `
          linear-gradient(rgba(0, 88, 255, 0.5), rgba(0, 216, 255, 0.75)),
          url(${speaker.photo}) no-repeat center
        `,
        backgroundSize: 'cover',
        backgroundBlendMode: 'hard-light',
        borderTopLeftRadius: beat(0.25),
        borderBottomRightRadius: beat(0.25),
        boxShadow: `${beat(0.75)} ${beat(0.5)} 0 1px ${Colors.grey900}`,
      }} />
      <div css={{
        position: 'absolute',
        left: 0,
        bottom: beat(0.25),
        width: beat(6),
        fontFamily: Fonts.display,
        lineHeight: 1.2,
        mixBlendMode: 'difference',
      }}>
        <div css={{ fontSize: fontSize(0), fontWeight: 600 }}>
          {speaker.name}
        </div>
        <div css={{ fontSize: fontSize(-5) }}>
          {speaker.from}
        </div>
      </div>
    </div>
  )

  render () {
    return (
      <Section title="Speakers" cssExtension={{
        background: `linear-gradient(${Colors.grey800}, ${Colors.grey900})`,
      }}>
        <div css={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: beat(25),
        }}>
          {SPEAKERS.map(speaker => this.renderSpeaker(speaker))}
        </div>
      </Section>
    )
  }
}
